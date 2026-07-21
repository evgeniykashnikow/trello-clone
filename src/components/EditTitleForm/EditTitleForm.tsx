import { FC, useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormActions from '@/components/FormActions';
import InputController from '@/components/InputController';
import { useBoard } from '@/features/board/useBoard';
import { useClickOutside } from '@/hooks/useClickOutside';
import { FormValues, Props } from './types';

const EditTitleForm: FC<Props> = ({
  handleMenuClose,
  title,
  columnId,
  onOpen,
  showActions = true,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const { updateColumnTitle } = useBoard();
  const methods = useForm<FormValues>({
    defaultValues: {
      title,
    },
  });

  const handleOnSubmit = (data: FormValues) => {
    if (data.title && columnId) {
      updateColumnTitle(columnId, data.title);
      handleMenuClose();
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [onOpen]);

  useClickOutside(ref, handleMenuClose);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <InputController ref={ref} name="title" className="bg-transparent p-1 h-max" />
        {showActions && <FormActions reset submitTitle="Save" handleClose={handleMenuClose} />}
      </form>
    </FormProvider>
  );
};

export default EditTitleForm;
