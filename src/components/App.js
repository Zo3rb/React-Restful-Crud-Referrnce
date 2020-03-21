import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from '../components/Header';
import ErrorPage from './ErrorPage';
import history from '../browserHistory';


const App = () => {
    return (
        <>
            {/* Adding The Routing End Points Here */}
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={StreamList} />
                        <Route exact path="/streams/new" component={StreamCreate} />
                        <Route exact path="/streams/show/:id" component={StreamShow} />
                        <Route exact path="/streams/edit/:id" component={StreamEdit} />
                        <Route exact path="/streams/delete/:id" component={StreamDelete} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </Router>
            {/* Adding The Routing End Points Here */}
        </>
    );
}

export default App;
