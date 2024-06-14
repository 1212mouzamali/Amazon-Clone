import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footernav from './Footernav';
import Betweencarosels from './Betweencarosels';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Bard from './Bard';

import AmazonFooter from './AmazonFooter';
import Backtotop from './Backtotop';
import Bookscarosel from './Books/Bookscarosel';
import Beautycarosel from './Beauty/Beautycarosel';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bard />
    <Footernav />
    <div className='parent'>
      <App />
      <Betweencarosels />
    </div>
    <Bookscarosel />
    <Beautycarosel />
    <Backtotop />
    <AmazonFooter />
  </React.StrictMode>
);

reportWebVitals();
