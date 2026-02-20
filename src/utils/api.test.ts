import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '../test/mocks/server';
import { getTodos, createTodo, deleteTodo, ApiError } from './api';

describe('API utilities', () => {
  describe('getTodos', () => {
    it('fetches all todos successfully', async () => {
      const todos = await getTodos();

      expect(todos).toHaveLength(3);
      expect(todos[0]).toEqual({
        id: 1,
        title: 'Buy groceries',
        completed: false,
      });
    });

    it('throws ApiError on non-OK response', async () => {
      server.use(
        http.get('https://api.example.com/todos', () => {
          return HttpResponse.json({ message: 'Nope' }, { status: 500 });
        })
      );

      await expect(getTodos()).rejects.toBeInstanceOf(ApiError);
    });
  });

  describe('createTodo', () => {
    it('creates a new todo', async () => {
      const newTodo = {
        title: 'Plan release',
        completed: false,
      };

      const createdTodo = await createTodo(newTodo);

      expect(createdTodo).toMatchObject(newTodo);
      expect(createdTodo.id).toBeDefined();
      expect(typeof createdTodo.id).toBe('number');
    });
  });

  describe('deleteTodo', () => {
    it('deletes a todo', async () => {
      await expect(deleteTodo(1)).resolves.toBeUndefined();
    });
  });
});
