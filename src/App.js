import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Footer } from './container';
import { Home } from './pages/home/Home';
import { Navbar } from './components';
import Signin from './pages/signin/Signin.jsx';

import './App.css';

const App = () => (
  <div>
    <Navbar />

    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="signin" element={<Signin />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
