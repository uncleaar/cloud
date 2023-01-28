import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined } from '@ant-design/icons';

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
    sorter: (a, b) => a.last_modified.length - b.last_modified.length
  },

  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <DeleteOutlined />
      </Space>
    )
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Классификация 1',
    last_modified: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Классификация 2',

    last_modified: '42'
  },
  {
    key: '3',
    name: 'Классификация 3',
    last_modified: '42'
  }
];

export const TableField: React.FC = () => <Table columns={columns} dataSource={data} />;
