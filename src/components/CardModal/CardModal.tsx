import { FC, SyntheticEvent } from 'react';
import CardDescription from 'components/CardDescription';
import CloseIcon from 'components/CloseIcon';
import { ITEMSTYPE } from 'constants/constants';
import { useItems } from 'hooks/useItems';
import { CardItem } from 'storage/models';
import { Props } from './types';

const CardModal: FC<Props> = ({ id, isModalVisible, handleModalClose }) => {
  const { getItemById } = useItems()
  const card = getItemById(ITEMSTYPE.CARDS, id) as CardItem;
  const column = getItemById(ITEMSTYPE.COLUMNS, card.columnId);

  const handlePreventClose = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      {isModalVisible &&
        <div
          onClick={handleModalClose}
          className="absolute inset-0 bg-gray-900/50 w-screen h-screen"
        >
          <div
            onClick={handlePreventClose}
            className="absolute inset-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white rounded-xl w-[60%] h-[80%] text-black"
          >

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl">{card.title}</h1>
                <p>in list <span className='font-bold'>{column.title}</span></p>
              </div>

              <CloseIcon reset={false} handleClose={handleModalClose} />
            </div>

            <CardDescription card={card}/>
          </div>
        </div>
      }
    </>
  );
};

export default CardModal;
