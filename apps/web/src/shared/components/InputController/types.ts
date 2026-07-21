import { InputHTMLAttributes } from 'react';

export type Props = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;
