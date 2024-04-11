import { FC } from 'react';
import AddItemForm from 'components/AddItemForm';
import Column from 'components/Column';
import { useItemsContext } from 'context/ItemsContext';
import { ColumnItem } from 'storage/models';

const Home: FC = () => {
  const { columns } = useItemsContext()

  return (
    <div className="bg-[url('assets/background.jpg')] bg-no-repeat h-screen p-12">
      <div className="flex gap-8">
        {columns && columns.map((column: ColumnItem) =>
          <Column key={column.id} title={column.title} id={column.id} />
        )}

        <div className="bg-white hover:bg-gray-200 transition rounded-2xl p-4 h-max w-64 shadow cursor-pointer">
          <AddItemForm label='Add column' placeholder="Enter column title" />
        </div>
      </div>
    </div>
  );
};

export default Home;
