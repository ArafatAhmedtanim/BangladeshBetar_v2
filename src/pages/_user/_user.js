import React from 'react';
import { DataConsumer } from './../../dataProvider/provider';
import UserTableWithAction from './component/UserTableWithAction';

export default class Home extends React.Component {
  
  render() { 
    return (
      <DataConsumer>{({update, users, stations}) =>
        <div>
          <UserTableWithAction 
            update={update} 
            users={users}
            stations={stations}
          />
        </div>
      }</DataConsumer>
    );
  }
}
