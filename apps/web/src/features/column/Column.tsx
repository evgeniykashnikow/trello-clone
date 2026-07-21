import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import Card from '@/features/card/Card';
import AddCard from '@/features/column/AddCard/AddCard';
import { Props } from '@/features/column/types';
import EditTitleForm from '@/shared/components/EditTitleForm/EditTitleForm';
import { DROP_TYPES } from '@/shared/constants/dropTypes';
import useMenu from '@/shared/hooks/useMenu';
import { CardContent, CardHeader, CardTitle, Card as UiCard } from '@/shared/ui/card';

const Column: FC<Props> = ({ title, id, tasks }) => {
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();
  const { updateColumnTitle } = useBoardContext();
  const [, drop] = useDrop({
    accept: DROP_TYPES.CARD,
    drop: () => ({ id }),
  });

  const handleUpdateColumnTitle = (newTitle: string) => {
    updateColumnTitle(id, newTitle);
  };

  return drop(
    <div>
      <UiCard className="w-64">
        <CardHeader>
          <CardTitle>
            {isVisible ? (
              <EditTitleForm
                onOpen={handleMenuOpen}
                showActions={false}
                title={title}
                handleMenuClose={handleMenuClose}
                onSave={handleUpdateColumnTitle}
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
          {tasks && tasks.map((card) => <Card card={card} key={card.id} />)}
          <AddCard columnId={id} />
        </CardContent>
      </UiCard>
    </div>,
  );
};

export default Column;
