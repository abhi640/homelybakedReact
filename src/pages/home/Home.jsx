import React from 'react';
import { Chef, Footer, Gallery, Header, SpecialMenu } from '../../container';
import { Navbar } from '../../components';
import './Home.css';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SpecialMenu />
      <Chef />
      <Gallery />
      <Footer />
    </div>
  );
};
