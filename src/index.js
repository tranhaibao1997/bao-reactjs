import React, { Context } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import firebaseInit from './firebase'
import ThemeContextComponent from './ThemeContext';
import { Provider } from "react-redux"
import { store } from './App.store'

firebaseInit();
ReactDOM.render( < ThemeContextComponent >
    <
    Provider store = { store } > < Main / > < /Provider> </ThemeContextComponent > , document.getElementById('root'));
serviceWorker.register();