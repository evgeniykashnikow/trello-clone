import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormActions from '@/components/FormActions';
import InputController from '@/components/InputController';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import { defaultValues, FormValues, Props } from './utils';

const AddColumnForm: FC<Props> = ({ handleClose }) => {
  const methods = useForm<FormValues>({
    defaultValues,
  });
  const { addColumn } = useBoardContext();

  const handleOnSubmit = (data: FormValues) => {
    if (data.title) {
      addColumn(data);
      handleClose();
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="bg-white hover:bg-gray-100 transition rounded-2xl p-4 h-max w-64 shadow"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <InputController name="title" placeholder="Enter column title" />
        <FormActions reset submitTitle="Add column" handleClose={handleClose} />
      </form>
    </FormProvider>
  );
};

export default AddColumnForm;
