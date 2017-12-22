import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'app/App';
import registerServiceWorker from './registerServiceWorker';

let rootEl = document.getElementById('root');
ReactDOM.render(<App/>, rootEl);

if (module.hot) {
  module.hot.accept('app/App', () => {
    const NextApp = require('app/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}
registerServiceWorker();
