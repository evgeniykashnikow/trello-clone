import { FC } from 'react';
import { Props } from './types';

const SubmitButton: FC<Props> = ({ title }) => (
  <button
    type="submit"
    className="bg-sky-500 rounded-md py-2 px-4 text-white cursor-pointer hover:bg-sky-400 transition active:bg-sky-300"
  >
    {title}
  </button>
);

export default SubmitButton;
