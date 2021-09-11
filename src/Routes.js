import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './components/RouteWithLayout';
import MainLayout from './layouts/Main';

import {
    BlogPost
} from './pages';

const Routes = () => {
    return (
        <Switch>
            {/* Redirect to "/dashboard" when user access root route "/" */}
            <RouteWithLayout
                component={BlogPost}
                exact
                layout={MainLayout}
                path="/"
            />
        </Switch>
    );
};

export default Routes;
