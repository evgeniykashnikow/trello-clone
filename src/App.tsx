import { FC, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ITEMSTYPE } from 'constants/constants';
import { ItemsContext } from 'context/ItemsContext';
import Home from 'pages/Home';
import { CardItem, ColumnItem } from 'storage/models';
import { storage } from 'storage/storage';

const App: FC = () => {
  const { getItems } = storage();
  const [cards, setCards] = useState<CardItem[]>(getItems(ITEMSTYPE.CARDS) || []);
  const [columns, setColumns] = useState<ColumnItem[]>(getItems(ITEMSTYPE.COLUMNS) || []);

  return (
    <ItemsContext.Provider value={{ columns, cards, setColumns, setCards }}>
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </ItemsContext.Provider>
  );
};

export default App;
