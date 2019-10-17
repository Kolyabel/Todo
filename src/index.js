import React from 'react';
import { render } from 'react-dom';
import App from './App';

const init = () => {
  const selector = document.querySelector('#root')

  if (selector) {
    renderInit(selector)
  }  
}

const renderInit = (selector) => {
  render(
    <App />,
    selector
  )
}

init()