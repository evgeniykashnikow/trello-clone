import { Card } from '@trello/shared';

export type Props = {
  card: Card;
  handleModalClose: () => void;
  isModalVisible: boolean;
};
