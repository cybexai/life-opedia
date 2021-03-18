import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SigninScreen } from '../ui';


export const index: React.FC = () => {
    return (
        <Router>

            <Switch>
                <Route path='/' exact component={SigninScreen} />
                <Route path='/signin' component={SigninScreen} />
            </Switch>

        </Router>
    );
}
