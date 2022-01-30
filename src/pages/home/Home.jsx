import React from 'react';
import { Chef, Footer, Gallery, Header, SpecialMenu } from '../../container';
import './Home.css';

export const Home = () => {
  return (
    <div>
      <Header />
      <SpecialMenu />
      <Chef />
      <Gallery />
      <Footer />
    </div>
  );
};
