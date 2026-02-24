import { FC, useId } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PlusIcon from 'assets/icons/plus.svg';
import ControllerInput from 'components/ControllerInput';
import FormActions from 'components/FormActions';
import { ITEMSTYPE } from 'constants/constants';
import { useItemsContext } from 'context/ItemsContext';
import { useItems } from 'hooks/useItems';
import useMenu from 'hooks/useMenu';
import { storage } from 'storage/storage';
import { FormValues, Props } from './types';

const AddItemForm: FC<Props> = ({ label, placeholder, columnId }) => {
  const methods = useForm<FormValues>();
  const { cards, columns } = useItemsContext();
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();
  const { setStorageItems } = storage();
  const { addItem } = useItems();
  const id = useId();

  const handleSetItems = (data: FormValues) => {
    if (columnId) {
      addItem(ITEMSTYPE.CARDS, { ...data, columnId });
      setStorageItems(ITEMSTYPE.CARDS, [...cards, { ...data, columnId }]);
    } else {
      addItem(ITEMSTYPE.COLUMNS, data);
      setStorageItems(ITEMSTYPE.COLUMNS, [...columns, data]);
    }
  };

  const handleOnSubmit = (data: FormValues) => {
    if (data.title) {
      handleSetItems(data);
      handleMenuClose();
      methods.reset();
    }
  };

  return (
    <div>
      {isVisible ? (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <ControllerInput
              fieldType="input"
              name="title"
              defaultValue=""
              placeholder={placeholder}
              className="outline-none p-3 mt-1 shadow resize-none rounded-md w-full"
            />

            <ControllerInput fieldType="input" type="hidden" name="id" defaultValue={id} />

            <FormActions reset submitTitle={label} handleClose={handleMenuClose} />
          </form>
        </FormProvider>
      ) : (
        <div
          className="flex gap-2 hover:bg-gray-200 transition px-4 py-2 rounded-2xl cursor-pointer"
          onClick={handleMenuOpen}
        >
          <img src={PlusIcon} alt="plus icon" className="w-6 h-6" />
          {label}
        </div>
      )}
    </div>
  );
};

export default AddItemForm;
