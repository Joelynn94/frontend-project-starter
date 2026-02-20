/**
 * API utility functions for making HTTP requests
 */

import { getEnvString } from './env';

const API_BASE_URL = getEnvString('VITE_API_BASE_URL', 'https://api.example.com').replace(
  /\/$/,
  ''
);

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export interface ApiErrorShape {
  message: string;
  status: number;
  body?: unknown;
  url: string;
}

export class ApiError extends Error implements ApiErrorShape {
  status: number;
  body?: unknown;
  url: string;

  constructor(args: ApiErrorShape) {
    super(args.message);
    this.name = 'ApiError';
    this.status = args.status;
    this.body = args.body;
    this.url = args.url;
  }
}

const DEFAULT_TIMEOUT_MS = 10_000;
const DEFAULT_RETRIES = 1;

type RequestOptions = RequestInit & {
  timeoutMs?: number;
  retries?: number;
};

async function safeParseJson(res: Response): Promise<unknown | undefined> {
  const text = await res.text().catch(() => '');
  if (!text) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function request<T>(input: RequestInfo | URL, init?: RequestOptions): Promise<T> {
  const timeoutMs = init?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const retries = init?.retries ?? DEFAULT_RETRIES;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(input, {
      ...init,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
    });

    if (!res.ok) {
      const body = await safeParseJson(res);
      const message =
        typeof body === 'string' ? body : (body as { message?: string })?.message || res.statusText;

      throw new ApiError({
        message,
        status: res.status,
        body,
        url: typeof input === 'string' ? input : input.toString(),
      });
    }

    if (res.status === 204 || res.status === 205) return undefined as T;

    const body = await safeParseJson(res);
    return body as T;
  } catch (err) {
    if (retries > 0) {
      return request<T>(input, { ...init, retries: retries - 1 });
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// GET /todos
export async function getTodos(): Promise<Todo[]> {
  return request<Todo[]>(`${API_BASE_URL}/todos`);
}

// POST /todos
export async function createTodo(input: Omit<Todo, 'id'>): Promise<Todo> {
  return request<Todo>(`${API_BASE_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

// DELETE /todos/:id
export async function deleteTodo(id: number): Promise<void> {
  await request<void>(`${API_BASE_URL}/todos/${id}`, { method: 'DELETE' });
}
