import React from 'react';
import { Table, Dropdown, Button, Menu, Icon, Popconfirm, Input } from 'antd';

function handleMenuClick(e) {
    console.log('click', e);
  
  }

export default class ActionButon extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            data : [
              {
                  "key": "1",
                  "name": "Arafat Ahmed",
                  "role": "Store Keeper",
                  "mobile":"+8801924252248",
                  "email":"arafat@gmail.com",
                  "station":"Rampura",
                  "designation": "Jr.",
                  "sign":"image_path",
                  "status":"1"
              },{
                  "key": "2",
                  "name": "Adnan Alam",
                  "role": "Store Keeper",
                  "mobile":"+8801924252249",
                  "email":"adnan@gmail.com",
                  "station":"Rampura",
                  "designation": "Sr.",
                  "sign":"image_path",
                  "status":"0"
              },{
                  "key": "3",
                  "name": "Admin",
                  "role": "Admin",
                  "mobile":"+8801920000000",
                  "email":"admin@gmail.com",
                  "station":"admin",
                  "designation": "admin",
                  "sign":"image_path",
                  "status":"1"
              }
          ]
          }
    }
    handleDelete(key) {
        console.log(key)
        const dataSource = [this.state.data];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
      }
  
      menu = (value, data) => 
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">Edit</Menu.Item>
          <Menu.Item key="2">Active</Menu.Item>
          <Menu.Item key="3">
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(value.key)}>
                    <a href="javascript:;">Delete</a>
            </Popconfirm>
          </Menu.Item>
        </Menu>

    render(){
        return(
            <Dropdown overlay={this.menu(this.props.record)}>
            <Button>
                Actions <Icon type="down" />
            </Button>
            </Dropdown>
        )
    }

}