import { createContext, useContext } from 'react';
import { Board } from '@/types/board';

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
};

const defaultContext: BoardContextType = {
  board: { columns: [] },
  addColumn: () => [],
  addCard: () => [],
};

export const BoardContext = createContext<BoardContextType>(defaultContext);
export const useBoardContext = () => useContext(BoardContext);
export const BoardContextProvider = BoardContext.Provider;
