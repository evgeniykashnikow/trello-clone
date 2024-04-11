import { CardItem, ColumnItem } from 'storage/models';

export type Props = {
  handleMenuClose: () => void,
  isVisible: boolean,
  item: CardItem | ColumnItem,
  type: string
  submitNotVisible?: boolean
}

export type FormValues = {
  title: string
}
