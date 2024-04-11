import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormValues } from 'components/CardModal/types';
import ControllerInput from 'components/ControllerInput';
import SubmitButton from 'components/SubmitButton';
import { ITEMSTYPE } from 'constants/constants';
import { useItems } from 'hooks/useItems';
import useMenu from 'hooks/useMenu';
import { Props } from './types';

const CardDescription: FC<Props> = ({ card }) => {
  const methods = useForm<FormValues>();
  const { updateItemByID } = useItems();
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();

  const handleOnSubmit = (data: FormValues) => {
    updateItemByID(ITEMSTYPE.CARDS, card.id, {
      ...card,
      description: data.description,
    });
    handleMenuClose();
    methods.reset();
  };

  return (
    <>
      <h2 className='mt-10 text-xl'>Description</h2>

      {card.description && !isVisible ?
        <p
          className='cursor-pointer ml-2 mt-2'
          onClick={handleMenuOpen}
        >{card.description}</p>
        :
        <FormProvider {...methods}>
          <form
            className='max-w-lg mt-2'
            onSubmit={methods.handleSubmit(handleOnSubmit)}
          >
            <ControllerInput
              fieldType='textarea'
              name='description'
              defaultValue={card.description || ''}
              placeholder='Add description'
              className='outline-none bg-gray-200 p-3 shadow focus:border border-gray-950 focus:bg-white resize-none rounded-md w-[80%] h-[80px]'
            />

            <SubmitButton
              reset
              title='Save'
              handleMenuClose={handleMenuClose}
            />
          </form>
        </FormProvider>
      }
    </>
  );
};

export default CardDescription;
