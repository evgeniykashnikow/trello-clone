import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormActions from '@/components/FormActions/FormActions';
import InputController from '@/components/InputController/InputController';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import { FormValues, Props } from './types';
import { defaultValues } from './utils';

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
        className="bg-[#f5f5dc] rounded-xl p-2 h-max w-[272px] shrink-0 shadow"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <InputController
          name="title"
          placeholder="Enter column title"
          className="bg-white shadow-sm px-3 py-2"
        />
        <FormActions reset submitTitle="Add column" handleClose={handleClose} />
      </form>
    </FormProvider>
  );
};

export default AddColumnForm;
