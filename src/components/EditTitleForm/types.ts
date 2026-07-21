export type Props = {
  handleMenuClose: () => void;
  title: string;
  showActions?: boolean;
  onOpen?: () => void;
  columnId?: string;
};

export type FormValues = {
  title: string;
};
