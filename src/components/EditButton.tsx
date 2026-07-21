import { FC, SyntheticEvent } from 'react';
import EditIcon from '@/assets/icons/edit.svg';

type Props = {
  handleOpenEdit: (event: SyntheticEvent) => void;
};

const EditButton: FC<Props> = ({ handleOpenEdit }) => (
  <div
    onClick={handleOpenEdit}
    className="w-6 h-6 place-items-center hidden rounded cursor-pointer hover:bg-gray-300 group-hover:grid"
  >
    <img className="w-4 h-4" src={EditIcon} alt="edit icon" />
  </div>
);

export default EditButton;
