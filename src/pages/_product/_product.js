import React from 'react';
import { DataConsumer } from '../../dataProvider/provider';
import ProductTableWithAction from './component/ProductTableWithAction';

export default class Home extends React.Component {
  
  render() { 
    return (
      <DataConsumer>{({update, products}) =>
        <div>
          <ProductTableWithAction 
            update={update} 
            products={products}
          />
        </div>
      }</DataConsumer>
    );
  }
}
