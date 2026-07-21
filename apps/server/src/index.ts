import cors from '@fastify/cors';
import Fastify from 'fastify';
import { boardRoutes } from './routes/board.js';
import { cardRoutes } from './routes/cards.js';
import { columnRoutes } from './routes/columns.js';

const app = Fastify({ logger: true });

await app.register(cors, { origin: 'http://localhost:5173' });

app.get('/api/health', async () => ({ status: 'ok' }));

await app.register(boardRoutes, { prefix: '/api' });
await app.register(columnRoutes, { prefix: '/api' });
await app.register(cardRoutes, { prefix: '/api' });

const port = Number(process.env.PORT ?? 3000);

try {
  await app.listen({ port, host: '0.0.0.0' });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
