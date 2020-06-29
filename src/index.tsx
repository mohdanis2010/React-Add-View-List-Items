import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from './lib/store'
import {reducer} from './reducer/reducer';

const store = createStore(reducer);


ReactDOM.render(<App data={store} />, document.getElementById('root'));
