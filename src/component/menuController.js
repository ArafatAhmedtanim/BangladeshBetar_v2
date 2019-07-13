import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './../pages/Dashboard/dashboard';
import Manufacturer from './../pages/_manufacturer/_manufacturer';
import Station from './../pages/Station/station';
import Product from './../pages/Product/product';
import Fault from './../pages/Fault/fault';
import Indent from './../pages/Indent/indent';
import SIB from './../pages/SIB/sib';
import Ledger from './../pages/Ledger/ledger';
import FAQ from './../pages/FAQ/faq';

export default function getSelectedContent(selectedMenu){
    return(
        <Switch>
            <Route
                exact
                path='/user'
                component={Dashboard}
            />
            <Route
                exact
                path='/station'
                component={Station}
            />
            <Route
                exact
                path='/manufacturer'
                component={Manufacturer}
            />
            <Route
                exact
                path='/product'
                component={Product}
            />
            <Route
                exact
                path='/fault'
                component={Fault}
            />
            <Route
                exact
                path='/indent'
                component={Indent}
            />
            <Route
                exact
                path='/sib'
                component={SIB}
            />
            <Route
                exact
                path='/ledger'
                component={Ledger}
            />
            <Route
                exact
                path='/faq'
                component={FAQ}
            />
        </Switch>
    );
}