import 'file?name=favicon.ico!./App.favicon.ico';

import './App.less';

import 'babel-polyfill';

import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';

// #root is a <div> produced by hjs-webpack's default HTML template.
ReactDOM.render(<App />, document.getElementById('root'));
