import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormActions from '@/components/FormActions/FormActions';
import InputController from '@/components/InputController/InputController';
import { useBoardContext } from '@/features/board/BoardContextUtils';
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
        <InputController
          name="title"
          placeholder="Enter card title"
          className="bg-white shadow-sm px-3 py-2"
        />

        <FormActions reset submitTitle="Add card" handleClose={handleClose} />
      </form>
    </FormProvider>
  );
};

export default AddCardForm;
