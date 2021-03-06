import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/configureStore';    // redux-saga 사용
// import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';



console.log(store.getState());  // reducers값 반환



ReactDOM.render(
    <Provider store= {store}>
         {/* <BrowserRouter> */}
             <App />
         {/* </BrowserRouter> */}
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
