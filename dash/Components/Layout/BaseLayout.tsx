import { Layout, Menu, Avatar, Badge, AutoComplete, Input, Dropdown, Space, Divider } from 'antd';
import Link from 'next/link';
import CompleteSearch from './CompleteSearch';

const { Header, Content } = Layout;

const Footer: React.FC = () => {
  return (
      <div className='flex place-items-center absolute bottom-0'>
        Technoculture Research ©2022 Created by TCR
      </div>
  );
}

const usermenu = (
  <Menu>
    <Menu.Item key="3">
      <Link href="/settings">
        Settings
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/signout">
        Sign Out
      </Link>
    </Menu.Item>
  </Menu>
);

const BaseLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header className="header shadow-sm" style={{ background: 'white' }}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['']} className='flex flex-wrap '>
          <Space align='start'>
            <Menu.Item key="1">
              <Link href="/">
                Home
              </Link>
            </Menu.Item>            
            <Menu.Item key="2">
              <Link href="/about">
                About
              </Link>
            </Menu.Item>
          </Space>
          <Space align="end">
            <Divider type="vertical" />
            <Menu.Item key="4">
              <Dropdown overlay={usermenu} placement="bottomLeft" className='my-1.5'>
                <Badge count={5}>
                  <Avatar shape="square">U</Avatar>
                </Badge>
              </Dropdown>  
            </Menu.Item>
          </Space>
        </Menu>
      </Header>

      <Layout>
        <Content>
          <div>{children}</div>
        </Content>
      </Layout>

      <Footer />
    </Layout>
  );
}

export default BaseLayout;