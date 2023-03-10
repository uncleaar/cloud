import { Spin } from 'antd';
import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const ScreenLoader: React.FC = () => <Spin indicator={antIcon} />;
