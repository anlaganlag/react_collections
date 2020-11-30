import React ,{Suspense}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n.js'


// yarn add i18next react-i18next i18next-http-backend i18next-browser-languagedetector
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="載入中...">

    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
