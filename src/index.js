import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Footer from './components/Footer/footer';
import Header from './components/Header/header';

=======
import Router from './Routes';
>>>>>>> afca975aec21d1f49d12d6712ed8f0e358b840f4



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Header />
      <App />
    <Footer />
=======
      <Router/>
>>>>>>> afca975aec21d1f49d12d6712ed8f0e358b840f4
  </React.StrictMode>
);
