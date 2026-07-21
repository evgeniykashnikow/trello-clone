import { FC } from 'react';
import PlusIcon from '@/assets/icons/plus.svg';
import { cn } from '@/lib/utils';

type Props = {
  label: string;
  handleMenuOpen: () => void;
  className?: string;
};

const AddItemButton: FC<Props> = ({ label, handleMenuOpen, className }) => (
  <div
    className={cn(
      'flex gap-2 hover:bg-gray-200 transition px-4 py-2 rounded-2xl cursor-pointer',
      className,
    )}
    onClick={handleMenuOpen}
  >
    <img src={PlusIcon} alt="plus icon" className="w-6 h-6" />
    {label}
  </div>
);

export default AddItemButton;
