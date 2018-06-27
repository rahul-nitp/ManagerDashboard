import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Route, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import reducers from "./reducers";
//my components
import Login from "./containers/login";
import SignUp from "./containers/signup";

const createStoreWithMiddleware= applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    
        <Route exact path ='/' component={App} />
        <Route path ='/login' component={Login} />
        <Route path ='/signUp' component={SignUp} />
        
        </div>
    </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
