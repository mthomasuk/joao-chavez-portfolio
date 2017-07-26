import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Navigation from './Navigation';

// Projects
import Bender from './components/projects/Bender';

export default () => (
    <Router>
        <App>
            <Route exact path="/" component={Navigation} />
            <Route exact path="/projects/bender" component={Bender} />
        </App>
    </Router>
);
