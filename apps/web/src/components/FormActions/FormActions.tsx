import { FC } from 'react';
import CloseButton from '@/components/CloseButton/CloseButton';
import { Button } from '@/components/ui/button';
import { Props } from './types';

const FormActions: FC<Props> = ({ handleClose, submitTitle, reset }) => (
  <div className="flex gap-2 items-center mt-2">
    <Button
      type="submit"
      size="sm"
      className="bg-[#0c66e4] hover:bg-[#0055cc] text-white border-0"
    >
      {submitTitle}
    </Button>
    <CloseButton reset={reset} handleClose={handleClose} />
  </div>
);

export default FormActions;
