import React from 'react'
import ReactDOM from 'react-dom'
import attachFastClick from 'fastclick'
import App from './App'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    attachFastClick(document.body)
  }, false)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
