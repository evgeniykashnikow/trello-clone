import { FC } from 'react';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import AddColumn from '@/features/board/components/AddColumn/AddColumn';
import Column from '@/features/column/Column';

const Board: FC = () => {
  const { board } = useBoardContext();
  const { columns } = board;

  return (
    <div className="bg-[url('assets/background.jpg')] bg-cover bg-center h-screen p-3">
      <div className="flex gap-2 items-start overflow-x-auto h-full">
        {columns &&
          columns.map((column) => (
            <Column key={column.id} title={column.title} id={column.id} tasks={column.tasks} />
          ))}

        <AddColumn />
      </div>
    </div>
  );
};

export default Board;
