import { forwardRef } from 'react';
import { useController } from 'react-hook-form';
import { cn } from '@/shared/lib/utils';
import { Input } from '@/shared/ui/input';
import { Props } from './types';

const InputController = forwardRef<HTMLInputElement, Props>(({ name, ...other }, ref) => {
  const { field } = useController({ name });

  return <Input {...field} {...other} ref={ref} className={cn('w-full', other.className)} />;
});
InputController.displayName = 'InputController';

export default InputController;
