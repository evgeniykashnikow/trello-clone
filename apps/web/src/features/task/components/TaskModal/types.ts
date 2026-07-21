import { Task } from '@trello/shared';

export type Props = {
  task: Task;
  handleModalClose: () => void;
  modalOpen: boolean;
};
