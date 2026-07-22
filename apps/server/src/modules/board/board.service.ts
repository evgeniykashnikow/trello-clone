import type { Board } from '@trello/shared';
import { prisma } from 'src/lib/prisma.js';

export async function getDefaultBoardId(): Promise<string> {
  const existing = await prisma.board.findFirst();
  if (existing) return existing.id;
  const created = await prisma.board.create({ data: {} });
  return created.id;
}

export async function getBoard(): Promise<Board> {
  const boardId = await getDefaultBoardId();
  const columns = await prisma.column.findMany({
    where: { boardId },
    orderBy: { position: 'asc' },
    include: { tasks: { orderBy: { position: 'asc' } } },
  });

  return {
    columns: columns.map((column) => ({
      id: column.id,
      title: column.title,
      tasks: column.tasks.map((task) => ({
        id: task.id,
        title: task.title,
        columnId: task.columnId,
        description: task.description ?? undefined,
      })),
    })),
  };
}
