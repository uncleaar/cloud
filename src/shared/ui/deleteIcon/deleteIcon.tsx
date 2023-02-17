import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { useDeleteFolderMutation } from '@hooks';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import styles from './DeleteIcon.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFolder } from '@shared/api';

type Text = {
  entityId: number;
  name: string;
};

interface DeleteIconProps {
  folder: Text;
}

const { confirm } = Modal;

export const DeleteIcon: FC<DeleteIconProps> = ({ folder }) => {
  const deleteMutation = useDeleteFolderMutation();

  const showDeleteConfirm = () => {
    confirm({
      title: `Are you sure delete this ${folder.name}?`,
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteMutation.mutate(folder.entityId as any);
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  return (
    <div className={styles.delete_icon}>
      <DeleteOutlined onClick={showDeleteConfirm} />
    </div>
  );
};
