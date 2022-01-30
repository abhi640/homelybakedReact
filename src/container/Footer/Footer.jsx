import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans_footer">Homely Baked, Ranchi - 834002</p>
        <p className="p__opensans_footer">+1 212-344-1230</p>
        <p className="p__opensans_footer">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.hblogo} alt="footer_logo" />
        <p className="p__opensans_footer">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          alt=""
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans_footer">Monday-Friday:</p>
        <p className="p__opensans_footer">08:00 am - 10:00 pm</p>
        <p className="p__opensans_footer">Saturday-Sunday:</p>
        <p className="p__opensans_footer">07:00 am - 05:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans_footer">
        2022 Homely Baked. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
