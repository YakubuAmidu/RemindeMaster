import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore();

<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'))
