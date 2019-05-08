import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../pages/home/home';

export default function getSelectedContent(selectedMenu) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
