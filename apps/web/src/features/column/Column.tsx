import { FC } from 'react';
import { useDrop } from 'react-dnd';
import EditTitleForm from '@/components/EditTitleForm/EditTitleForm';
import { CardContent, CardHeader, CardTitle, Card as UiCard } from '@/components/ui/card';
import { DROP_TYPES } from '@/constants/dropTypes';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import Card from '@/features/card/Card';
import AddCard from '@/features/column/AddCard/AddCard';
import { Props } from '@/features/column/types';
import useMenu from '@/hooks/useMenu';

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
      <UiCard className="w-[272px] shrink-0 bg-[#f5f5dc] text-neutral-900">
        <CardHeader className="p-2 pb-1">
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
                className="cursor-pointer px-2 py-1 text-sm font-semibold"
                onClick={handleMenuOpen}
              >
                {title}
              </p>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          {tasks && tasks.map((card) => <Card card={card} key={card.id} />)}
          <AddCard columnId={id} />
        </CardContent>
      </UiCard>
    </div>,
  );
};

export default Column;
