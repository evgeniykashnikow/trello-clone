import { FC } from 'react';
import { useDrop } from 'react-dnd';
import EditTitleForm from '@/components/EditTitleForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DROP_TYPES } from '@/constants/dropTypes';
import AddCard from '@/features/column/AddCard';
import { Props } from '@/features/column/types';
import Task from '@/features/task';
import useMenu from '@/hooks/useMenu';

const Column: FC<Props> = ({ title, id, tasks }) => {
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();
  const [, drop] = useDrop({
    accept: DROP_TYPES.CARD,
    drop: () => ({ id }),
  });

  return drop(
    <div>
      <Card className="w-64">
        <CardHeader>
          <CardTitle>
            {isVisible ? (
              <EditTitleForm
                onOpen={handleMenuOpen}
                showActions={false}
                title={title}
                handleMenuClose={handleMenuClose}
                columnId={id}
              />
            ) : (
              <p
                className="border border-transparent cursor-pointer p-1 text-sm"
                onClick={handleMenuOpen}
              >
                {title}
              </p>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {tasks && tasks.map((card) => <Task card={card} key={card.id} />)}
          <AddCard columnId={id} />
        </CardContent>
      </Card>
    </div>,
  );
};

export default Column;
