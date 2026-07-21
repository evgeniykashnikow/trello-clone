import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import FormActions from '@/shared/components/FormActions/FormActions';
import useMenu from '@/shared/hooks/useMenu';
import { Textarea } from '@/shared/ui/textarea';
import { FormValues, Props } from './types';

const CardDescription: FC<Props> = ({ card }) => {
  const { updateCardDescription } = useBoardContext();
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();
  const methods = useForm<FormValues>({
    defaultValues: {
      description: card.description ?? '',
    },
  });

  const handleOnSubmit = (data: FormValues) => {
    updateCardDescription(card.id, data.description);
    handleMenuClose();
  };

  return (
    <>
      <h2 className="mt-10 text-xl">Description</h2>

      {card.description && !isVisible ? (
        <p className="cursor-pointer ml-2 mt-2 whitespace-pre-wrap" onClick={handleMenuOpen}>
          {card.description}
        </p>
      ) : (
        <FormProvider {...methods}>
          <form className="max-w-lg mt-2" onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <Textarea
              {...methods.register('description')}
              placeholder="Add a more detailed description..."
              className="h-[80px] resize-none"
            />
            <FormActions reset submitTitle="Save" handleClose={handleMenuClose} />
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default CardDescription;
