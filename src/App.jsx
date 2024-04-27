import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './Router';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
