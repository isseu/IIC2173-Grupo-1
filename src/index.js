import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import deepstream from 'deepstream.io-client-js'
import './index.css';

const client = deepstream('localhost:6020').login({}, (success, data) => {
  if (success) {
    ReactDOM.render(
      <App client={client} />,
      document.getElementById('root')
    );
  } else {
    alert("Problema al conectarse a servidor deepstream")
  }
})
