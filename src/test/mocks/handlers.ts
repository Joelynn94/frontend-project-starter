import { http, HttpResponse } from 'msw';
import type { Todo } from '../../utils/api';

const API_BASE_URL = 'https://api.example.com';

// Mock data
const mockTodos: Todo[] = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Write unit tests', completed: true },
  { id: 3, title: 'Ship the feature', completed: false },
];

/**
 * MSW handlers for mocking API requests in tests
 */
export const handlers = [
  // GET /todos - Fetch all todos
  http.get(`${API_BASE_URL}/todos`, () => {
    return HttpResponse.json(mockTodos);
  }),

  // POST /todos - Create a new todo
  http.post(`${API_BASE_URL}/todos`, async ({ request }) => {
    const newTodo = (await request.json()) as Omit<Todo, 'id'>;
    const createdTodo: Todo = {
      id: mockTodos.length + 1,
      ...newTodo,
    };

    return HttpResponse.json(createdTodo, { status: 201 });
  }),

  // DELETE /todos/:id - Delete a todo
  http.delete(`${API_BASE_URL}/todos/:id`, ({ params }) => {
    const { id } = params;
    const exists = mockTodos.some(todo => todo.id === Number(id));

    if (!exists) {
      return new HttpResponse(null, { status: 404 });
    }

    return new HttpResponse(null, { status: 204 });
  }),
];
