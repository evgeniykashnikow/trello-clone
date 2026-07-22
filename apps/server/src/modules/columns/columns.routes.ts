import type { FastifyInstance } from 'fastify';
import { createColumnHandler, deleteColumnHandler, updateColumnHandler } from './columns.controller.js';

export async function columnRoutes(app: FastifyInstance) {
  app.post('/columns', createColumnHandler);
  app.patch('/columns/:id', updateColumnHandler);
  app.delete('/columns/:id', deleteColumnHandler);
}
