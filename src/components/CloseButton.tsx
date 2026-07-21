import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import CloseIcon from '@/assets/icons/close.svg?react';

type Props = {
  handleClose: () => void;
  reset: boolean;
};

const CloseButton: FC<Props> = ({ handleClose, reset }) => {
  const methods = useFormContext();

  const handleClick = () => {
    if (reset) {
      methods.reset();
    }
    handleClose();
  };

  return <CloseIcon className="w-6 h-6 cursor-pointer" onClick={handleClick} />;
};

export default CloseButton;
