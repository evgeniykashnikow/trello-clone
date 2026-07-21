import type { Board } from '@trello/shared';
import type { FastifyInstance } from 'fastify';
import { getDefaultBoardId } from '../defaultBoard.js';
import { prisma } from '../prisma.js';

export async function boardRoutes(app: FastifyInstance) {
  app.get('/board', async (): Promise<Board> => {
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
  });
}
