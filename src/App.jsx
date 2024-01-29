import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Authenticate from './pages/Authenticate';
import CardView from './components/CardView';
import CardCreate from './components/CardCreate'
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/card' element={<CardView />} />
        <Route path='/create' element={<CardCreate />} />
        <Route path='/auth' element={<Authenticate />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
