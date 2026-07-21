import { createContext, useContext } from 'react';
import { Board } from '@trello/shared';

export type AddColumnParams = {
  title: string;
};

export type AddCardParams = {
  columnId: string;
  title: string;
};

type BoardContextType = {
  board: Board;
  addColumn: ({ title }: AddColumnParams) => void;
  addCard: ({ title, columnId }: AddCardParams) => void;
  moveCard: (fromColId: string, toColId: string, cardId: string) => void;
  updateColumnTitle: (columnId: string, newTitle: string) => void;
  updateCardTitle: (cardId: string, newTitle: string) => void;
  updateCardDescription: (cardId: string, description: string) => void;
};

const defaultContext: BoardContextType = {
  board: { columns: [] },
  addColumn: () => [],
  addCard: () => [],
  moveCard: () => {},
  updateColumnTitle: () => {},
  updateCardTitle: () => {},
  updateCardDescription: () => {},
};

export const BoardContext = createContext<BoardContextType>(defaultContext);
export const useBoardContext = () => useContext(BoardContext);
export const BoardContextProvider = BoardContext.Provider;
