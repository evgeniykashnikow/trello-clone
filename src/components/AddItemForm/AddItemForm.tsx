import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ControllerInput from 'components/ControllerInput';
import SubmitButton from 'components/SubmitButton';
import { ITEMSTYPE } from 'constants/constants';
import { useItemsContext } from 'context/ItemsContext';
import { useItems } from 'hooks/useItems';
import useMenu from 'hooks/useMenu';
import { storage } from 'storage/storage';
import { FormValues, Props } from './types';

const AddItemForm: React.FC<Props> = ({ label, placeholder, columnId }) => {
  const methods = useForm<FormValues>();
  const { cards, columns } = useItemsContext();
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();
  const { setStorageItems } = storage();
  const { addItem } = useItems();

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
      {isVisible ?
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <ControllerInput
              fieldType="input"
              name="title"
              defaultValue=""
              placeholder={placeholder}
              className="outline-none p-3 mt-1 shadow resize-none rounded-md w-full"
            />

            <ControllerInput
              fieldType="input"
              type="hidden"
              name="id"
              defaultValue={Date.now()}
            />

            <SubmitButton
              reset
              title={label}
              handleMenuClose={handleMenuClose}
            />
          </form>
        </FormProvider>
        :
        <p
          className="flex gap-2 hover:bg-gray-200 transition px-4 py-2 rounded-2xl cursor-pointer"
          onClick={handleMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {label}
        </p>
      }
    </div>
  );
};

export default AddItemForm;
