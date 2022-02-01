import React from 'react';
import { Link } from 'react-router-dom';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title subheading_color">
      <SubHeading title="Menu that fits your mood" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Cookies</p>
        <div className="app__specialMenu_menu_items">
          {data.cookies.map((cookie, index) => (
            <MenuItem
              key={cookie.title + index}
              title={cookie.title}
              price={cookie.price}
              tags={cookie.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.cookies} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Chocolates</p>
        <div className="app__specialMenu_menu_items">
          {data.chocolates.map((chocolate, index) => (
            <MenuItem
              key={chocolate.title + index}
              title={chocolate.title}
              price={chocolate.price}
              tags={chocolate.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <Link to="/shop">
        <button type="button" className="custom__button">
          Shop Now
        </button>
      </Link>
    </div>
  </div>
);

export default SpecialMenu;
