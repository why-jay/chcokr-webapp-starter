import './App.less';

import 'babel/polyfill';

import App from './App';

import React from 'react';

let containerElem = document.getElementById('react_app_container');
if (!containerElem) {
  containerElem = document.createElement('div');
  containerElem.id = 'react_app_container';
  document.body.appendChild(containerElem);
}
React.render(<App />, containerElem);
