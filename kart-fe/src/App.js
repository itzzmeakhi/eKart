import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='my-3'>
        <Container>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
