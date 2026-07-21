import type { FastifyInstance } from 'fastify';
import { prisma } from '../prisma.js';
import { createCardSchema, updateCardSchema } from '../schemas.js';

export async function cardRoutes(app: FastifyInstance) {
  app.post('/cards', async (req, reply) => {
    const parsed = createCardSchema.safeParse(req.body);
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

    const { columnId, title } = parsed.data;
    const position = await prisma.card.count({ where: { columnId } });
    return prisma.card.create({ data: { title, columnId, position } });
  });

  // Handles rename, description edit, and move (columnId + position).
  app.patch('/cards/:id', async (req, reply) => {
    const parsed = updateCardSchema.safeParse(req.body);
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

    const { id } = req.params as { id: string };
    return prisma.card.update({ where: { id }, data: parsed.data });
  });

  app.delete('/cards/:id', async (req) => {
    const { id } = req.params as { id: string };
    await prisma.card.delete({ where: { id } });
    return { ok: true };
  });
}
