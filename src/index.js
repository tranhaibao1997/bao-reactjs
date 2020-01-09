import React, { Context } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import firebaseInit from './firebase'
import ThemeContextComponent from './ThemeContext';
import { Provider } from "react-redux"
import { store } from './App.store'
import { ToastProvider, useToasts } from 'react-toast-notifications'



firebaseInit();
ReactDOM.render( < ThemeContextComponent >
        <
        Provider store = { store } > < ToastProvider > < Main / > < /ToastProvider> < /Provider > < /ThemeContextComponent > , document.getElementById('root'));
        serviceWorker.unregister();