import type { FastifyInstance } from 'fastify';
import { getBoardHandler } from './board.controller.js';

export async function boardRoutes(app: FastifyInstance) {
  app.get('/board', getBoardHandler);
}
