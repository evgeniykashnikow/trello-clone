import { FC } from 'react';
import CloseIcon from 'components/CloseIcon';
import { Props } from './types';

const SubmitButton: FC<Props> = ({ handleMenuClose, title, reset }) => (
    <div className="flex gap-2 items-center mt-2">
      <button
        type="submit"
        className="bg-sky-500 rounded-md py-2 px-4 text-white"
      >{title}
      </button>
      <CloseIcon reset={reset} handleClose={handleMenuClose} />
    </div>
  );

export default SubmitButton;
