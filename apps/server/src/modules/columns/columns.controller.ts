import type { FastifyReply, FastifyRequest } from 'fastify';
import { createColumnSchema, updateColumnSchema } from './columns.schema.js';
import { createColumn, deleteColumn, updateColumn } from './columns.service.js';

export async function createColumnHandler(req: FastifyRequest, reply: FastifyReply) {
  const parsed = createColumnSchema.safeParse(req.body);
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

  return createColumn(parsed.data);
}

export async function updateColumnHandler(req: FastifyRequest, reply: FastifyReply) {
  const parsed = updateColumnSchema.safeParse(req.body);
  if (!parsed.success) return reply.status(400).send({ error: parsed.error.issues });

  const { id } = req.params as { id: string };
  return updateColumn(id, parsed.data);
}

export async function deleteColumnHandler(req: FastifyRequest) {
  const { id } = req.params as { id: string };
  await deleteColumn(id);
  return { ok: true };
}
