import { Noop, useForm } from 'react-hook-form';
import { FormValues } from './types';
import { useApi } from './useApi';
import { defaultValues } from './utils';

type useAddColumnFormProps = {
  handleClose: Noop
}

export const useAddColumnForm = ({ handleClose }: useAddColumnFormProps) => {
  const methods = useForm<FormValues>({
    defaultValues,
  });
  const { createColumnMutation } = useApi();

  const handleOnSubmit = (data: FormValues) => {
    if (data.title) {
      createColumnMutation(data.title);
      handleClose();
      methods.reset();
    }
  };

  return { methods, handleOnSubmit };
};
