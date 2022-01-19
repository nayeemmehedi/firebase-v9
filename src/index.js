import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './ReduxFunction/Store/Store1st';
import { store2 } from './ReduxFunction/Store/Store2nd';
import AuthProvider from './firebase/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store2}>


    
    
    <AuthProvider>

    <App />


    </AuthProvider>
  

    
  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
