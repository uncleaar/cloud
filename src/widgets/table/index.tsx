import React, { useState } from 'react';
import { Button, Modal, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, FolderAddOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';

import styles from './Table.module.scss';
import { InputField } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';
import { getClassifications } from '@shared/api';
import SpinFC from 'antd/es/spin';

interface DataType {
  key: string;
  name: string;
  last_modified: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length
  },

  {
    title: 'Last Modified',
    dataIndex: 'last_modified',
    key: 'last_modified',
    align: 'right',
    sorter: (a, b) => a.last_modified.length - b.last_modified.length,
    render: (text, record) => (
      <Space size='middle'>
        {text}
        <DeleteOutlined />
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
  } = useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (values: any) => {
    console.log(values, 'values');
  };

  if (isLoading) return <p>loading</p>;
  console.log(data, 'data');

  return (
    <div className={styles.table}>
      <Modal
        title='Sure you want to accept?'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField control={control} name='name' size='large' placeholder='Name' type='text' />
        </form>
      </Modal>
      <div className={styles.top}>
        <div className={styles.folders}>Folders</div>
        <Button type='text' className={styles.add} icon={<FolderAddOutlined />} onClick={showModal}>
          Add classification
        </Button>
      </div>
      <Table columns={columns} dataSource={data.list} rowKey='entityId' />
    </div>
  );
};
