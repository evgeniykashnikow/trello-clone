export type Props = {
  handleMenuClose: () => void;
  title: string;
  onSave: (title: string) => void;
  showActions?: boolean;
  onOpen?: () => void;
};

export type FormValues = {
  title: string;
};
