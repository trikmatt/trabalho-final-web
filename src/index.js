import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Login from './components/Login';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      {/* <App /> */}
      <Login/>
      
    <Footer />
  </React.StrictMode>
);
