import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import FormActions from '@/components/FormActions/FormActions';
import InputController from '@/components/InputController/InputController';
import { Props } from './types';
import { useAddColumnForm } from './useAddColumnForm';

const AddColumnForm: FC<Props> = ({ handleClose }) => {
  const { methods, handleOnSubmit } = useAddColumnForm({ handleClose });

  return (
    <FormProvider {...methods}>
      <form
        className="bg-[#f1f2f4] rounded-xl p-2 h-max w-68 shrink-0 shadow"
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
