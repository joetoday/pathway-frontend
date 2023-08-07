// import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome: boolean = location.pathname === "/";

  return (
    <header>
      {isHome ?
      <div className="home-header">
        <img src='./assets/images/logo.png' alt='logo'/>
        <Button variant='primary' className='btn-primary-text' onClick={() => navigate("/vaults")}>Launch App</Button>
      </div>
      :
      <div className="other-header">
        <div className="indicator">
          <Icon icon="material-symbols:circle" />
        </div>
        <div className="select-dropdowns">
          <Form.Select>
            <option value="polygon">Polygon</option>
            <option value="ethereum">Ethereum</option>
          </Form.Select>
        </div>
        <div className="select-dropdowns">
          <Form.Select>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </Form.Select>
        </div>
        <Button variant='primary' className='btn-primary-text'>
          <Icon icon="bxs:wallet" className='btn-icon'/> {" "} {!true ? "Disconnect " : "Connect "} Wallet
        </Button>
      </div>
      }
    </header>
  )
}

export default Header
