import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Props } from './types';

const ControllerInput: FC<Props> = ({
                                                     name,
                                                     defaultValue,
                                                     fieldType,
                                                     ...other
                                                   }) => {
  const { control } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) =>
        fieldType === 'input' ?
          <input
            {...field}
            type='text'
            {...other}
          /> :
          <textarea
            {...field}
            {...other}
          />
      }
    />
  );
};

export default ControllerInput;
