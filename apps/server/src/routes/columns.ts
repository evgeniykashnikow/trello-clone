import type { FastifyInstance } from 'fastify';
import { getDefaultBoardId } from '../defaultBoard.js';
import { prisma } from '../prisma.js';
import { createColumnSchema, updateColumnSchema } from '../schemas.js';

export async function columnRoutes(app: FastifyInstance) {
  app.post('/columns', async (req, reply) => {
    const parsed = createColumnSchema.safeParse(req.body);
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

    const boardId = await getDefaultBoardId();
    const position = await prisma.column.count({ where: { boardId } });
    return prisma.column.create({ data: { title: parsed.data.title, position, boardId } });
  });

  app.patch('/columns/:id', async (req, reply) => {
    const parsed = updateColumnSchema.safeParse(req.body);
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

    const { id } = req.params as { id: string };
    return prisma.column.update({ where: { id }, data: { title: parsed.data.title } });
  });

  app.delete('/columns/:id', async (req) => {
    const { id } = req.params as { id: string };
    await prisma.column.delete({ where: { id } });
    return { ok: true };
  });
}
