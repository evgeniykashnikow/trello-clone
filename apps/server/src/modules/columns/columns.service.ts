import { getDefaultBoardId } from 'src/modules/board/board.service.js';
import { prisma } from 'src/lib/prisma.js';
import type { CreateColumnInput, UpdateColumnInput } from './columns.schema.js';

export async function createColumn(input: CreateColumnInput) {
  const boardId = await getDefaultBoardId();
  const position = await prisma.column.count({ where: { boardId } });
  return prisma.column.create({ data: { title: input.title, position, boardId } });
}

export async function updateColumn(id: string, input: UpdateColumnInput) {
  return prisma.column.update({ where: { id }, data: { title: input.title } });
}

export async function deleteColumn(id: string) {
  await prisma.column.delete({ where: { id } });
}
