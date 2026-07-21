import { Card } from './card';

export type Column = {
  id: string;
  title: string;
  tasks: Card[];
};
