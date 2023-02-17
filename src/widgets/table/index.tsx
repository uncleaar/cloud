import React, { useState } from 'react';
import { Button, Modal, Space, Spin, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, FolderAddOutlined, LoadingOutlined } from '@ant-design/icons';
import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './Table.module.scss';
import { DeleteIcon, InputField } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';
import { Folder, getClassifications } from '@shared/api';
import SpinFC from 'antd/es/spin';
import { useCreateFolderMutation } from '@hooks';
import { toast } from 'react-toastify';

interface DataType {
  key: string;
  name: string;
  last_modified: string;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length
  },

  {
    align: 'center',
    render: (text, record) => (
      <Space size='middle'>
        <DeleteIcon text={text} />
      </Space>
    )
  }
];

export const TableField: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, isError, data, error, refetch } = useQuery(
    ['classifications'],
    getClassifications
  );

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm<Folder>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { mutate, isLoading: isLoadingCreateFolder } = useCreateFolderMutation({
    options: {
      onSuccess: (data) => {
        toast.success(data.status.code);
        refetch();
      },

      onError: (data) => {
        toast.error(data.response.data.status.description);
      }
    }
  });

  const onSubmit: SubmitHandler<Folder> = (name: any) => {
    mutate(name);
  };

  if (isLoading) return <Spin indicator={antIcon} />;

  if (isLoadingCreateFolder) {
    setTimeout(() => {}, 5000);
  }
  return (
    <div className={styles.table}>
      <Modal
        title='Create classification'
        open={isModalOpen}
        centered
        footer={null}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField control={control} name='name' size='large' placeholder='Name' type='text' />

          <div className={styles.buttons}>
            <Button onClick={handleCancel} className={styles.cancel}>
              Cancel
            </Button>

            <Button htmlType='submit' loading={isLoadingCreateFolder} className={styles.confirm}>
              Confirm
            </Button>
          </div>
        </form>
      </Modal>
      <div className={styles.top}>
        <div className={styles.folders}>Folders</div>
        <Button type='text' className={styles.add} icon={<FolderAddOutlined />} onClick={showModal}>
          Add classification
        </Button>
      </div>
      <Table columns={columns} dataSource={data.list} rowKey='entityId' size='middle' />
    </div>
  );
};
