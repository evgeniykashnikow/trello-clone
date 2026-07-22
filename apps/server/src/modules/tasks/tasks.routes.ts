import type { FastifyInstance } from 'fastify';
import { createTaskHandler, deleteTaskHandler, updateTaskHandler } from './tasks.controller.js';

export async function taskRoutes(app: FastifyInstance) {
  app.post('/tasks', createTaskHandler);
  app.patch('/tasks/:id', updateTaskHandler);
  app.delete('/tasks/:id', deleteTaskHandler);
}
