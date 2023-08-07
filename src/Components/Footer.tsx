import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-info">
          <div className="footer-logo">
            <img src='./assets/images/logo-white.png' alt='pathway finance'/>
          </div>
          <div className="info">The path to crypto investing. </div>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Documentation</Link></li>
            <li><Link to="/">Terms of Services</Link></li>
            <li><Link to="/">Privacy Notice</Link></li>
          </ul>
        </div>
        <div className="footer-socials">
          <div className="icons">
            <ul>
              <li><Link to="/"><Icon icon="ic:round-facebook" /></Link></li>
              <li><Link to="/"><Icon icon="ri:twitter-fill" /></Link></li>
              <li><Link to="/"><Icon icon="akar-icons:instagram-fill" /></Link></li>
            </ul>
          </div>
          <div className="footer-sub-form">
            <Form.Label>Subscribe now</Form.Label>
            <div className="sub-form">
              <div className="sub-input">
                <Form.Control type="email" placeholder="Email Address" />
              </div>
              <div className="sub-btn">
                <Button variant='primary'>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
