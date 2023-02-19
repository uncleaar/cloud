import { Input } from 'antd';
import React, { FC } from 'react';

const { Search } = Input;

interface SearchProps {
  placeholder?: string;
}

export const SearchF: FC<SearchProps> = ({ placeholder }) => {
  const onSearch = (value: string) => console.log(value);

  return (
    <Search
      placeholder={placeholder}
      allowClear
      onSearch={onSearch}
      style={{ maxWidth: '1000px' }}
    />
  );
};
