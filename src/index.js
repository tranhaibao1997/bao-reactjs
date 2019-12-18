import React, { Context } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import firebaseInit from './firebase'
import MyRouter from './MyRouter';
import Login from './components/Login/Login';
import ThemeContextComponent from './ThemeContext';

firebaseInit();
ReactDOM.render( <ThemeContextComponent >
        <Main/> </ThemeContextComponent>, document.getElementById('root'));
serviceWorker.unregister();