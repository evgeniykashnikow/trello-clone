import { FC, PropsWithChildren } from 'react';
import { BoardContextProvider } from '@/features/board/BoardContextUtils';
import { useBoard } from '@/features/board/useBoard';

const BoardContext: FC<PropsWithChildren> = ({ children }) => {
  const {
    board,
    addCard,
    addColumn,
    moveCard,
    updateColumnTitle,
    updateCardTitle,
    updateCardDescription,
  } = useBoard();

  return (
    <BoardContextProvider
      value={{
        board,
        addColumn,
        addCard,
        moveCard,
        updateColumnTitle,
        updateCardTitle,
        updateCardDescription,
      }}
    >
      {children}
    </BoardContextProvider>
  );
};

export default BoardContext;
