import React from 'react';
import { Link } from 'react-router-dom';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">For The Love of Cookies & Chocolates</h1>

      <Link to="/shop">
        <button type="button" className="custom__button">
          Shop Now
        </button>
      </Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.hero} alt="header_img" />
    </div>
  </div>
);

export default Header;
