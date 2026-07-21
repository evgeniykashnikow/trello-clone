import { FC } from 'react';
import CloseButton from '@/shared/components/CloseButton/CloseButton';
import { Button } from '@/shared/ui/button';
import { Props } from './types';

const FormActions: FC<Props> = ({ handleClose, submitTitle, reset }) => (
  <div className="flex gap-2 items-center mt-2">
    <Button type="submit" variant="outline" size="sm">
      {submitTitle}
    </Button>
    <CloseButton reset={reset} handleClose={handleClose} />
  </div>
);

export default FormActions;
