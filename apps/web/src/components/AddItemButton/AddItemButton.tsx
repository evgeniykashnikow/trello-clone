import { FC } from 'react';
import PlusIcon from '@/assets/icons/plus.svg';
import { cn } from '@/lib/utils';
import { Props } from './types';

const AddItemButton: FC<Props> = ({ label, handleMenuOpen, className }) => (
  <div
    className={cn(
      'flex gap-1 items-center text-sm text-neutral-600 hover:bg-black/10 transition px-2 py-2 rounded-lg cursor-pointer',
      className,
    )}
    onClick={handleMenuOpen}
  >
    <img src={PlusIcon} alt="plus icon" className="w-4 h-4" />
    {label}
  </div>
);

export default AddItemButton;
