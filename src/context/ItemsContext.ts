import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { ITEMSTYPE } from 'constants/constants';
import { CardItem, ColumnItem } from 'storage/models';
import { storage } from 'storage/storage';

const { getItems } = storage();

type ItemsContext = {
  cards: CardItem[],
  columns: ColumnItem[],
  setCards: Dispatch<SetStateAction<CardItem[]>>
  setColumns: Dispatch<SetStateAction<ColumnItem[]>>
}

const defaultContext = {
  cards: getItems(ITEMSTYPE.CARDS),
  columns: getItems(ITEMSTYPE.COLUMNS),
  setCards: () => [],
  setColumns: () => [],
}

export const ItemsContext = createContext<ItemsContext>(defaultContext);
export const useItemsContext = () => useContext(ItemsContext);
