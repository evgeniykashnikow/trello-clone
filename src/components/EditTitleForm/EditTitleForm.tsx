import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ControllerInput from 'components/ControllerInput';
import SubmitButton from 'components/SubmitButton';
import { ITEMSTYPE } from 'constants/constants';
import { useItemsContext } from 'context/ItemsContext';
import { useItems } from 'hooks/useItems';
import { storage } from 'storage/storage';
import { FormValues, Props } from './types';


const EditTitleForm: FC<Props> = ({
                                                       handleMenuClose,
                                                       item,
                                                       isVisible,
                                                       submitNotVisible,
                                                       type
                                                     }) => {
  const { setStorageItems } = storage();
  const methods = useForm<FormValues>();
  const { cards, columns } = useItemsContext();
  const { updateItemByID } = useItems();

  const handleSetItems = (data: FormValues) => {
    if (type === ITEMSTYPE.CARDS) {
      updateItemByID(ITEMSTYPE.CARDS, item.id, { ...item, ...data });
      setStorageItems(ITEMSTYPE.CARDS, cards);
    } else {
      updateItemByID(ITEMSTYPE.COLUMNS, item.id, { ...item, ...data });
      setStorageItems(ITEMSTYPE.COLUMNS, columns);
    }
  };

  const handleOnSubmit = (data: FormValues) => {
    if (data.title) {
      handleSetItems(data);
      handleMenuClose();
    }
  };

  return (
    <>
      {!isVisible
        ? item.title
        :
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <ControllerInput fieldType="input" name="title" defaultValue={item.title} />

            {!submitNotVisible &&
              <SubmitButton
                title="Save"
                reset
                handleMenuClose={handleMenuClose}
              />
            }
          </form>
        </FormProvider>
      }
    </>
  );
};

export default EditTitleForm;
