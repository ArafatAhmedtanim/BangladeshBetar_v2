import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPage from './../pages/_user/_user';
import StationPage from './../pages/_station/_station';

export default function getSelectedContent(selectedMenu) {
  return (
    <Switch>
      <Route exact path="/users" component={UserPage} />
      <Route exact path="/stations" component={StationPage} />
    </Switch>
  );
}
