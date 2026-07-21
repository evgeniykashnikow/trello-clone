import { useCallback, useState } from 'react';

export type UseOpenHookResponse = [boolean, () => void, () => void, () => void] & {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleToggle: () => void;
};

export const useOpen = (defaultValue: boolean = false) => {
  const [open, setOpen] = useState(defaultValue);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const result = [open, handleOpen, handleClose, handleToggle] as UseOpenHookResponse;

  result.open = result[0];
  result.handleOpen = result[1];
  result.handleClose = result[2];
  result.handleToggle = result[3];

  return result;
};
