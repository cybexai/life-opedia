import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as UI from '../ui';


export const index: React.FC = () => {
    return (
        <Router>

            <Switch>
                <Route path='/' exact component={UI.SigninScreen} />
                <Route path='/signin' component={UI.SigninScreen} />
                <Route path='/homepage' component={UI.HomepageScreen} />
                <Route path='/article/new' component={UI.NewArticleScreen} />
                <Route path='/article/detail/:id' component={UI.ArticleDetailScreen} />
            </Switch>

        </Router>
    );
}
