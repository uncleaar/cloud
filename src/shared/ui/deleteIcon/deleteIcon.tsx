import { DeleteOutlined } from '@ant-design/icons';
import { FC } from 'react';

import styles from './DeleteIcon.module.scss';

type Text = {
  entityId: number;
  name: string;
};

interface DeleteIconProps {
  text: Text;
}

export const DeleteIcon: FC<DeleteIconProps> = ({ text }) => {
  console.log(text, ' text');
  return (
    <div className={styles.delete_icon}>
      <DeleteOutlined />
    </div>
  );
};
