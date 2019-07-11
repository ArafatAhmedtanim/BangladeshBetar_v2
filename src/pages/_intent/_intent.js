import React from 'react';
import { DataConsumer } from '../../dataProvider/provider';
import IntentTableWithAction from './component/IntentTableWithAction';

export default class Home extends React.Component {
  
  render() { 
    return (
      <DataConsumer>{({update, stations}) =>
        <div>
          <IntentTableWithAction 
            update={update} 
            stations={stations}
          />
        </div>
      }</DataConsumer>
    );
  }
}
