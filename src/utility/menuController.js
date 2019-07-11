import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPage from './../pages/_user/_user';
import StationPage from './../pages/_station/_station';
import ManufacturerPage from './../pages/_manufacturer/_manufacturer';
import ProductPage from './../pages/_product/_product';
import IntentPage from './../pages/_intent/_intent';
import SIBPage from './../pages/_sib/_sib';
import LedgerPage from './../pages/_ledger/_ledger';

export default function getSelectedContent(selectedMenu) {
  return (
    <Switch>
      <Route exact path="/users" component={UserPage} />
      <Route exact path="/stations" component={StationPage} />
      <Route exact path="/manufacturer" component={ManufacturerPage} />
      <Route exact path="/product" component={ProductPage} />
      <Route exact path="/intent" component={IntentPage} />
      <Route exact path="/sib" component={SIBPage} />
      <Route exact path="/ledger" component={LedgerPage} />
    </Switch>
  );
}
