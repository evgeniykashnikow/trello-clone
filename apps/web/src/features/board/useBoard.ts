import { useCallback, useEffect, useState } from 'react';
import { Board, Card } from '@trello/shared';
import { AddCardParams, AddColumnParams } from '@/features/board/BoardContextUtils';
import { generateId } from '@/shared/utils/generateId';

const LOCAL_STORAGE_KEY = 'trello_board';

export function useBoard() {
  const [board, setBoard] = useState<Board>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : { columns: [] };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(board));
  }, [board]);

  const addColumn = useCallback(({ title }: AddColumnParams) => {
    setBoard((prev) => ({
      columns: [...prev.columns, { id: generateId(), title, tasks: [] }],
    }));
  }, []);

  const addCard = useCallback(({ title, columnId }: AddCardParams) => {
    setBoard((prev) => ({
      columns: prev.columns.map((col) =>
        col.id === columnId
          ? { ...col, tasks: [...col.tasks, { id: generateId(), title, columnId }] }
          : col,
      ),
    }));
  }, []);

  const updateColumnTitle = useCallback((columnId: string, newTitle: string) => {
    setBoard((prev) => ({
      columns: prev.columns.map((col) =>
        col.id === columnId ? { ...col, title: newTitle } : col,
      ),
    }));
  }, []);

  const updateCardTitle = useCallback((cardId: string, newTitle: string) => {
    setBoard((prev) => ({
      columns: prev.columns.map((col) => ({
        ...col,
        tasks: col.tasks.map((card) =>
          card.id === cardId ? { ...card, title: newTitle } : card,
        ),
      })),
    }));
  }, []);

  const updateCardDescription = useCallback((cardId: string, description: string) => {
    setBoard((prev) => ({
      columns: prev.columns.map((col) => ({
        ...col,
        tasks: col.tasks.map((card) =>
          card.id === cardId ? { ...card, description } : card,
        ),
      })),
    }));
  }, []);

  const moveCard = useCallback((fromColId: string, toColId: string, cardId: string) => {
    setBoard((prev) => {
      let movingCard: Card | undefined;
      const newColumns = prev.columns.map((col) => {
        if (col.id === fromColId) {
          movingCard = col.tasks.find((c) => c.id === cardId);
          return { ...col, tasks: col.tasks.filter((c) => c.id !== cardId) };
        }
        return col;
      });

      return {
        columns: newColumns.map((col) => {
          if (col.id === toColId && movingCard) {
            return { ...col, tasks: [...col.tasks, movingCard] };
          }
          return col;
        }),
      };
    });
  }, []);

  return {
    board,
    addColumn,
    addCard,
    moveCard,
    setBoard,
    updateColumnTitle,
    updateCardTitle,
    updateCardDescription,
  };
}
