import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <ReduxProvider store={configureStore()}>
        <Router>
            <App/>
        </Router>
    </ReduxProvider>,
    document.getElementById('app'),
);
