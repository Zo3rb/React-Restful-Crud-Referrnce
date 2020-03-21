import React from 'react';
import ReactDom from 'react-dom';
// Styling Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// External Imports
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
// Internal Imports
import './index.css';
import App from './components/App';
import reducers from './reducers';
// For Debugging -> Redux Dev Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root')
);