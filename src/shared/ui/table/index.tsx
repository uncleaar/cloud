import { Button, Modal, Space, Spin, Table, Tag } from 'antd';
import SpinFC from 'antd/es/spin';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FolderAddOutlined, FolderFilled, LoadingOutlined } from '@ant-design/icons';
import { useCreateFolderMutation } from '@hooks';
import { Folder, getClassifications } from '@shared/api';
import { DeleteIcon, InputField } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';

import styles from './Table.module.scss';
import { getLocale, getMessages } from '@helpers';

interface DataType {
  key: string;
  name: string;
  entityId: number;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, { entityId }) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FolderFilled style={{ fontSize: '25px', paddingRight: '20px' }} />
        <Link to={`classification/${entityId}`}>{text}</Link>
      </div>
    ),

    sorter: (a, b) => a.name.length - b.name.length
  },

  {
    align: 'center',
    render: (text, record) => (
      <Space size='middle'>
        <DeleteIcon folder={text} />
      </Space>
    )
  }
];

export const TableField: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, isError, data, error, refetch } = useQuery(['classifications'], getClassifications);

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
    setIsModalOpen(false);
  };

  if (isLoading) return <Spin indicator={antIcon} />;

  if (isError) return <p>error</p>;

  if (isLoadingCreateFolder) {
    setTimeout(() => {}, 5000);
  }
  return (
    <div className={styles.table}>
      <Modal title='Create classification' open={isModalOpen} centered footer={null} onCancel={handleCancel}>
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
