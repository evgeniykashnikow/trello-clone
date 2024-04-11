import { ITEMSTYPE } from 'constants/constants';
import { useItemsContext } from 'context/ItemsContext';
import { CardItem, ColumnItem } from 'storage/models';

export const useItems = () => {
  const { cards, columns, setColumns, setCards } = useItemsContext();

  const addItem = (type: string, data: CardItem | ColumnItem) => {
    if (type === ITEMSTYPE.CARDS) {
      setCards(prevState => [...prevState, data as CardItem]);
    } else {
      setColumns(prevState => [...prevState, data]);
    }
  };

  const updateItemByID = (type: string, id: number, newItem: CardItem | ColumnItem) => {
    if (type === ITEMSTYPE.CARDS) {
      setCards(prevCards => {
        const card = prevCards.filter(card => card.id === id)[0];
        prevCards.splice(prevCards.indexOf(card), 1, newItem as CardItem);

        return [...prevCards];
      });
    } else {
      setColumns(prevCards => {
        const column = prevCards.filter(card => card.id === id)[0];
        prevCards.splice(prevCards.indexOf(column), 1, newItem);

        return [...prevCards];
      });
    }
  };

  const getItemById = (type: string, id: number) => {
    if (type === ITEMSTYPE.CARDS) {
      return cards.filter((item) => id === item.id)[0];
    } else {
      return columns.filter((item) => id === item.id)[0];
    }
  };

  return { addItem, updateItemByID, getItemById };
};
