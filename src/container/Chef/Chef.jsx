import React from 'react';

import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.cooking} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant_chef">Baked Fresh Every Day</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans_chef">We make cookies for you on order. </p>
        </div>
        <p className="p__opensans_chef">
          {' '}
          Our cookies are made from scratch, packed beautifully and shipped all
          across India.Items are baked fresh daily with premium ingredients and
          a little bit of love.{' '}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kiran Choudhary</p>
        <p className="p__opensans_chef">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
