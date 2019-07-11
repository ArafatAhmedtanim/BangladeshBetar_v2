import React from 'react';
import { DataConsumer } from './../../dataProvider/provider';
import ManufaturerTableWithAction from './component/ManufaturerTableWithAction';

export default class Home extends React.Component {
  
  render() { 
    return (
      <DataConsumer>{({update, manufacturers}) =>
        <div>
          <ManufaturerTableWithAction 
            update={update} 
            manufacturer={manufacturers}
          />
        </div>
      }</DataConsumer>
    );
  }
}
