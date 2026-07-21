import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import FormActions from '@/shared/components/FormActions/FormActions';
import InputController from '@/shared/components/InputController/InputController';
import { FormValues, Props } from './types';
import { defaultValues } from './utils';

const AddCardForm: FC<Props> = ({ columnId, handleClose }) => {
  const methods = useForm<FormValues>({
    defaultValues,
  });
  const { addCard } = useBoardContext();

  const handleOnSubmit = (data: FormValues) => {
    if (data.title) {
      addCard({ title: data.title, columnId });
      handleClose();
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <InputController name="title" placeholder="Enter card title" className="px-2 py-1" />

        <FormActions reset submitTitle="Add card" handleClose={handleClose} />
      </form>
    </FormProvider>
  );
};

export default AddCardForm;
