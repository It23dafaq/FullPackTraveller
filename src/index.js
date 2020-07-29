import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, combineReducers,applyMiddleware } from 'redux';
//Deferent way we can initialize on other
//import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import  loginAuthReducer  from './store/reducers/loginAuth';
import  flightsReducer    from './store/reducers/mainPageReducer';
import  hotelReducer      from './store/reducers/hotelReducer';

const rootReducer = combineReducers({
    login: loginAuthReducer,
    main: flightsReducer,
    hotel:hotelReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
