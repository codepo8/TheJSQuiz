require('./styles/main.scss');
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './Router'
import AppState from './stores/AppState'

const appState = new AppState();

ReactDOM.render(
    <AppContainer>
        <App store={appState}/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./Router', () => {
        const NextApp = require('./Router').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp store={appState}/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
