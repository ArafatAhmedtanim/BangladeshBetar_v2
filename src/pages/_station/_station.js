import React from 'react';
import { DataConsumer } from './../../dataProvider/provider';
import StationTableWithAction from './component/StationTableWithAction';

export default class Home extends React.Component {
  
  render() { 
    return (
      <DataConsumer>{({update, stations}) =>
        <div>
          <StationTableWithAction 
            update={update} 
            stations={stations}
          />
        </div>
      }</DataConsumer>
    );
  }
}
