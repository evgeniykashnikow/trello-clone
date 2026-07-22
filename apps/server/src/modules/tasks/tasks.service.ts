import { prisma } from 'src/lib/prisma.js';
import type { CreateTaskInput, UpdateTaskInput } from './tasks.schema.js';

export async function createTask(input: CreateTaskInput) {
  const { columnId, title } = input;
  const position = await prisma.task.count({ where: { columnId } });
  return prisma.task.create({ data: { title, columnId, position } });
}

// Handles rename, description edit, and move (columnId + position).
export async function updateTask(id: string, input: UpdateTaskInput) {
  return prisma.task.update({ where: { id }, data: input });
}

export async function deleteTask(id: string) {
  await prisma.task.delete({ where: { id } });
}
