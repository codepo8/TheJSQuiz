require('./styles/main.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './Router'
import AppState from './stores/AppState'

// For the cheaters
console.log('You are only cheating yourself, try and figure the code out in your head.')

const appState = new AppState();

ReactDOM.render(
  <AppContainer>
    <App store={appState} />
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextApp = require('./Router').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp store={appState} />
      </AppContainer>
      ,
      document.getElementById('root')
    );
  });
}
