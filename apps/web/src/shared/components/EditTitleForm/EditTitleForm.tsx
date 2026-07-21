import { FC, useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormActions from '@/shared/components/FormActions/FormActions';
import InputController from '@/shared/components/InputController/InputController';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { FormValues, Props } from './types';

const EditTitleForm: FC<Props> = ({
  handleMenuClose,
  title,
  onSave,
  onOpen,
  showActions = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const methods = useForm<FormValues>({
    defaultValues: {
      title,
    },
  });

  const handleOnSubmit = (data: FormValues) => {
    if (data.title) {
      onSave(data.title);
      handleMenuClose();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [onOpen]);

  useClickOutside(formRef, handleMenuClose);

  return (
    <FormProvider {...methods}>
      <form ref={formRef} onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <InputController ref={inputRef} name="title" className="bg-transparent p-1 h-max" />
        {showActions && <FormActions reset submitTitle="Save" handleClose={handleMenuClose} />}
      </form>
    </FormProvider>
  );
};

export default EditTitleForm;
