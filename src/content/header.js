import React from 'react';
import { Layout, Icon, Menu } from 'antd';
const { Header } = Layout;

const signOutUser = props => {
  try {
    localStorage.clear();
    window.location.href = "/";
  } catch (e) {}
};
const MyHeader = () => {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={this.toggle}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default MyHeader;
