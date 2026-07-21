import type { FastifyInstance } from 'fastify';
import { prisma } from '../prisma.js';
import { createTaskSchema, updateTaskSchema } from '../schemas.js';

export async function taskRoutes(app: FastifyInstance) {
  app.post('/tasks', async (req, reply) => {
    const parsed = createTaskSchema.safeParse(req.body);
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

    const { columnId, title } = parsed.data;
    const position = await prisma.task.count({ where: { columnId } });
    return prisma.task.create({ data: { title, columnId, position } });
  });

  // Handles rename, description edit, and move (columnId + position).
  app.patch('/tasks/:id', async (req, reply) => {
    const parsed = updateTaskSchema.safeParse(req.body);
    if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

    const { id } = req.params as { id: string };
    return prisma.task.update({ where: { id }, data: parsed.data });
  });

  app.delete('/tasks/:id', async (req) => {
    const { id } = req.params as { id: string };
    await prisma.task.delete({ where: { id } });
    return { ok: true };
  });
}
