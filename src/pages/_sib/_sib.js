import React from 'react';
import { DataConsumer } from '../../dataProvider/provider';
import SIBTableWithAction from './component/SIBTableWithAction';

export default class Home extends React.Component {
  
  render() { 
    return (
      <DataConsumer>{({update, stations}) =>
        <div>
          <SIBTableWithAction 
            update={update} 
            stations={stations}
          />
        </div>
      }</DataConsumer>
    );
  }
}
