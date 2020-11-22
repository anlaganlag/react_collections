import React ,{Suspense}from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import './i18n.js'

ReactDOM.render(
    <Suspense fallback="載入中...">

    <App />
    </Suspense>,
  document.getElementById('root')
)
