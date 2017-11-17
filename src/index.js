import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

import { LocaleProvider } from 'antd';

import { addLocaleData, IntlProvider } from 'react-intl';
import appLocales from './appLocales';

import 'antd/dist/antd.css';
import './index.css';

import App from './App.js';

const store = createStore(rootReducer);
// console.log({ store, 'store state': store.getState() });

const appLocale = Math.random() > 0.5 ? appLocales.zhHansCNLocale : appLocales.enUSLocale;

addLocaleData(appLocale.data);

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={appLocale.antdLocale}>
      <IntlProvider locale={appLocale.intlLocale} messages={appLocale.messages}>
        <HashRouter basename="/">
          <App />
        </HashRouter>
      </IntlProvider>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
