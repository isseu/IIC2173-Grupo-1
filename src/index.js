import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import deepstream from 'deepstream.io-client-js'
import './index.css';

const client = deepstream('localhost:6020').login({}, () => {
  ReactDOM.render(
    <App client={client} />,
    document.getElementById('root')
  );
})
