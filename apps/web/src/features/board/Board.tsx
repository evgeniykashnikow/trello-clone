import { FC } from 'react';
import AddColumn from '@/features/board/components/AddColumn/AddColumn';
import Column from '@/features/column/Column';
import { useBoardQuery } from '@/hooks/api/queries/useBoardQuery';

const Board: FC = () => {
  const { board, isLoading } = useBoardQuery();

  return (
    <div className="bg-[url('assets/background.jpg')] bg-cover bg-center h-screen p-3">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <div className="w-10 h-10 border-4 border-white/40 border-t-white rounded-full animate-spin" />
        </div>
      ) : (
        <div className="flex gap-2 items-start overflow-x-auto h-full">
          {board?.columns &&
            board.columns.map((column) => (
              <Column key={column.id} title={column.title} id={column.id} tasks={column.tasks} />
            ))}

          <AddColumn />
        </div>
      )}
    </div>
  );
};

export default Board;
