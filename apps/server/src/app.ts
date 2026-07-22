import Fastify from 'fastify';
import { errorHandler } from 'src/errors/errorHandler.js';
import corsPlugin from 'src/plugins/cors.js';
import { boardRoutes } from 'src/modules/board/board.routes.js';
import { columnRoutes } from 'src/modules/columns/columns.routes.js';
import { taskRoutes } from 'src/modules/tasks/tasks.routes.js';

export async function buildApp() {
  const app = Fastify({ logger: true });

  app.setErrorHandler(errorHandler);

  await app.register(corsPlugin);

  app.get('/api/health', async () => ({ status: 'ok' }));

  await app.register(boardRoutes, { prefix: '/api' });
  await app.register(columnRoutes, { prefix: '/api' });
  await app.register(taskRoutes, { prefix: '/api' });

  return app;
}
