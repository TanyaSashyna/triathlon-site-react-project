import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import Router from './router';
import { store } from "./store.js";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router history={history} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
