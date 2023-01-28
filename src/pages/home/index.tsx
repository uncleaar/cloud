import { StarOutlined } from '@ant-design/icons';
import { LinkItem } from '@shared/ui';
import { Header, Sidebar, TableField } from '@widgets';
import { Layout } from 'antd';

const { Content } = Layout;

const HomePage = () => {
  return (
    <>
      <div>
        <Layout>
          <Header />

          <Layout>
            <Sidebar>
              <LinkItem text='Starred' icon={<StarOutlined />} path='/starred' />
            </Sidebar>
            <Content>
              <TableField />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default HomePage;
