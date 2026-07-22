import type { FastifyReply, FastifyRequest } from 'fastify';
import { createTaskSchema, updateTaskSchema } from './tasks.schema.js';
import { createTask, deleteTask, updateTask } from './tasks.service.js';

export async function createTaskHandler(req: FastifyRequest, reply: FastifyReply) {
  const parsed = createTaskSchema.safeParse(req.body);
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

  return createTask(parsed.data);
}

export async function updateTaskHandler(req: FastifyRequest, reply: FastifyReply) {
  const parsed = updateTaskSchema.safeParse(req.body);
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

  const { id } = req.params as { id: string };
  return updateTask(id, parsed.data);
}

export async function deleteTaskHandler(req: FastifyRequest) {
  const { id } = req.params as { id: string };
  await deleteTask(id);
  return { ok: true };
}
