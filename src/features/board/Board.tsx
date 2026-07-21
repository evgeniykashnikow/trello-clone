import { FC } from 'react';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import AddColumn from '@/features/board/components/AddColumn';
import Column from '@/features/column';

const Board: FC = () => {
  const { board } = useBoardContext();
  const { columns } = board;

  return (
    <div className="bg-[url('assets/background.jpg')] bg-no-repeat h-screen p-12">
      <div className="flex gap-8 items-start">
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
