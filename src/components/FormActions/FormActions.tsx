import { FC } from 'react';
import CloseButton from 'components/CloseButton';
import { Props } from 'components/FormActions/types';
import SubmitButton from 'components/SubmitButton';

const FormActions: FC<Props> = ({ handleClose, submitTitle, reset }) => (
  <div className="flex gap-2 items-center mt-2">
    <SubmitButton title={submitTitle} />
    <CloseButton reset={reset} handleClose={handleClose} />
  </div>
);

export default FormActions;
