import { CardItem, ColumnItem } from 'storage/models';

export const storage = () => {

  const setStorageItems = (type: string, data: CardItem[] | ColumnItem[]) => {
    localStorage.setItem(type, JSON.stringify(data));
  };

  const getItems = (type: string) => JSON.parse(localStorage.getItem(type) as string);

  // const addItem = (type: string, items: Array<ColumnItem | CardItem>) => {
  //   localStorage.setItem(type, JSON.stringify(items));
  // };
  //
  // const getItemById = (type: string, id: number) => {
  //   const items = getItems(type);
  //
  //   return items.filter((item: ColumnItem | CardItem) => id === item.id)[0];
  // };
  //
  // const updateItemByID = (type: string, id: number, newItem: CardItem | ColumnItem) => {
  //   const items = getItems(type);
  //   const item = items.filter((item: ColumnItem | CardItem) => item.id === id);
  //
  //   items.splice(items.indexOf(...item), 1, newItem);
  //   addItem(type, items);
  // };

  return { getItems, setStorageItems };
};
