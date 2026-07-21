import { FC } from 'react';
import CloseButton from '@/components/CloseButton';
import { Button } from '@/components/ui/button';

type Props = {
  submitTitle: string;
  handleClose: () => void;
  reset: boolean;
};

const FormActions: FC<Props> = ({ handleClose, submitTitle, reset }) => (
  <div className="flex gap-2 items-center mt-2">
    <Button variant="outline" size="sm" onClick={handleClose}>
      {submitTitle}
    </Button>
    <CloseButton reset={reset} handleClose={handleClose} />
  </div>
);

export default FormActions;
