import React from 'react';
import { Layout, Icon, Button } from 'antd';
import MyMenu from './../utility/menuItem';
import getSelectedContent from './../utility/menuController';
import { DataConsumer } from './../dataProvider/provider';

const { Content, Sider, Header } = Layout;
const signOutUser = props => {
  try {
    localStorage.clear();
    window.location.href = "/";
  } catch (e) {}
};
export default class MySider extends React.Component {
  state = {
    collapsed: true,
    selectedMenu: '0',
  };

  onCollapse = collapsed => this.setState({ collapsed });
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  triggerSider = ({ key }) => localStorage.setItem('selectedMenu', key);

  render() {
    return (
      <DataConsumer>
        {({ selectedMenu }) => (
          <Layout className="main-container">
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <MyMenu triggerSider={this.triggerSider} />
            </Sider>

            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
                <Button shape="circle" icon="logout" className="header-logout-button" onClick={signOutUser}/>
              </Header>
              <Content style={{ padding: '30px', hegiht: '100vh' }}>
                {getSelectedContent(selectedMenu)}
              </Content>
            </Layout>
          </Layout>
        )}
      </DataConsumer>
    );
  }
}
