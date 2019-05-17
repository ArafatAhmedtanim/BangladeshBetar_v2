import React from 'react';
import { DataConsumer } from './../../dataProvider/provider';
import UserTable from './../../component/table';
import Axios from 'axios';
import Api from  './../../dataProvider/api.json';

import {AllUserTableCols} from './utility/allUserTableCol';
 
export default class Home extends React.Component {
  constructor(props){
    super(props)

    this.state={
      users : [],
    }
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));

    Axios
    .get(Api.HOST+Api.ALLUSER, {
      headers: { Authorization: 'bearer ' + user.user.token }
    })
    .then(res => {
      console.log(res.data)
      this.setState({users: res.data})
    })
    .catch(error => {});
  }

  render() {
    return (
      <DataConsumer>{() =>
        <UserTable 
          columns={AllUserTableCols} 
          data={this.state.users} 
          className={'all-user-table'}
        />
      }</DataConsumer>
    );
  }
}
