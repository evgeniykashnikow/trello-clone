import type { Board } from '@trello/shared';
import type { FastifyInstance } from 'fastify';
import { getDefaultBoardId } from '../defaultBoard.js';
import { prisma } from '../prisma.js';

export async function boardRoutes(app: FastifyInstance) {
  // Whole board, nested + ordered. Shape matches @trello/shared Board.
  app.get('/board', async (): Promise<Board> => {
    const boardId = await getDefaultBoardId();
    const columns = await prisma.column.findMany({
      where: { boardId },
      orderBy: { position: 'asc' },
      include: { cards: { orderBy: { position: 'asc' } } },
    });

    return {
      columns: columns.map((column) => ({
        id: column.id,
        title: column.title,
        tasks: column.cards.map((card) => ({
          id: card.id,
          title: card.title,
          columnId: card.columnId,
          description: card.description ?? undefined,
        })),
      })),
    };
  });
}
