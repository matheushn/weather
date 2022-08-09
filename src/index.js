import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { requestTemps, checkTempMin, checkTempMax } from './Redux/reducers'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const logger = createLogger() 

const rootReducers = combineReducers( { requestTemps, checkTempMin, checkTempMax })

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

root.render(
  <Provider store={store}><App/></Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
