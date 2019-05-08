import React from 'react';
import Sider from './../content/sider';
import DataProvider from './../dataProvider/provider';
import { DataConsumer } from './../dataProvider/provider';

export default class MainFrame extends React.Component {
  render() {
    return (
      <DataProvider>
        <DataConsumer>{({ update }) => <Sider update={update} />}</DataConsumer>
      </DataProvider>
    );
  }
}
