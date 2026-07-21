export type FormValues = {
  title: string;
};

export type Props = {
  columnId: string;
  handleClose: () => void;
};

export const defaultValues = {
  title: '',
};
