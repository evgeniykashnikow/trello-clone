import { FC } from 'react';
import EditTitleForm from '@/components/EditTitleForm/EditTitleForm';
import { CardContent, CardHeader, CardTitle, Card as UiCard } from '@/components/ui/card';
import AddTask from '@/features/column/components/AddTask/AddTask';
import { Props } from '@/features/column/types';
import { useColumn } from '@/features/column/useColumn';
import Task from '@/features/task/Task';

const Column: FC<Props> = ({ title, id, tasks }) => {
  const { handleUpdateColumnTitle, handleOpen, handleClose, open, drop } = useColumn(id);

  return drop(
    <div>
      <UiCard className="w-68 shrink-0 bg-[#f1f2f4] text-neutral-900">
        <CardHeader className="p-2 pb-1">
          <CardTitle>
            {open ? (
              <EditTitleForm
                onOpen={handleOpen}
                showActions={false}
                title={title}
                handleClose={handleClose}
                onSave={handleUpdateColumnTitle}
              />
            ) : (
              <p className="cursor-pointer px-2 py-1 text-sm font-semibold" onClick={handleOpen}>
                {title}
              </p>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          {tasks && tasks.map((task) => <Task task={task} key={task.id} />)}
          <AddTask columnId={id} />
        </CardContent>
      </UiCard>
    </div>,
  );
};

export default Column;
