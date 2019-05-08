import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuList } from './../utility/menuList.js';
import { MdDashboard } from 'react-icons/md';

export default class menuItem extends React.Component {
  render() {
    return (
      <Menu
        className="main-side-menu"
        theme="light"
        mode="inline"
        defaultSelectedKeys={[this.props.selectedKeys]}
      >
        {MenuList.map((item, index) => (
          <Menu.Item key={item.name} onClick={this.props.triggerSider}>
            <Link to={item.link} className="nav-link">
              <span className="main-side-menu-icon-container">
                <MdDashboard className="dashboard-menu-icon" />
              </span>
              <span className="main-side-menu-text-container">{item.name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
