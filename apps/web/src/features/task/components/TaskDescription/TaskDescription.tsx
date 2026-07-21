import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormActions from '@/components/FormActions/FormActions';
import { Textarea } from '@/components/ui/textarea';
import { useTask } from '@/features/task/useTask';
import { useOpen } from '@/hooks/useOpen';
import { FormValues, Props } from './types';

const TaskDescription: FC<Props> = ({ task }) => {
  const { updateTaskDescription } = useTask();
  const { handleOpen, handleClose, open } = useOpen();
  const methods = useForm<FormValues>({
    defaultValues: {
      description: task.description ?? '',
    },
  });

  const handleOnSubmit = (data: FormValues) => {
    updateTaskDescription(task.id, data.description);
    handleClose();
  };

  return (
    <>
      <h2 className="mt-10 text-xl">Description</h2>

      {task.description && !open ? (
        <p className="cursor-pointer ml-2 mt-2 whitespace-pre-wrap" onClick={handleOpen}>
          {task.description}
        </p>
      ) : (
        <FormProvider {...methods}>
          <form className="max-w-lg mt-2" onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <Textarea
              {...methods.register('description')}
              placeholder="Add a more detailed description..."
              className="h-[80px] resize-none"
            />
            <FormActions reset submitTitle="Save" handleClose={handleClose} />
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default TaskDescription;
