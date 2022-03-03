import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Footer from './components/Footer'
import Header from './components/Header'
import reportWebVitals from './reportWebVitals';
import { ProviderContext } from './store/InitContext'

ReactDOM.render(
  <BrowserRouter>
    <ProviderContext>
      <Header />
      <App />
      <Footer />
    </ProviderContext>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
