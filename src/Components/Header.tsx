import React, {useState} from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ConnectModal from './ConnectModal';
import { useAccount, useDisconnect } from "wagmi";

import { getEllipsisTxt } from "../Utils/formatters";


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { address, connector: isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [modalShow, setModalShow] = useState<boolean>(false);

  const isHome: boolean = location.pathname === "/";

  const disconnectWallet = async () => {
    disconnect();
    localStorage.removeItem("connectorId");
    window.location.reload();
  };

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
        {isConnected ?
        <>
          <Dropdown>
            <Dropdown.Toggle variant="success" >
             <div className="dropdown-btn-wrapper">
             <div className="con-wallet">Wallet Address</div>
              {address && typeof address === "string" && 
              <div className="con-address">{getEllipsisTxt(address, 5)}</div>
              }
             </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={disconnectWallet}>Disconnect Wallet</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> 
        </>
        :
        <Button variant='primary' className='btn-primary-text' onClick={() => setModalShow(true)}>
          <Icon icon="bxs:wallet" className='btn-icon'/> {" "} {!true ? "Disconnect " : "Connect "} Wallet
        </Button>
        }
        {/* <Button variant='primary' className='btn-primary-text' onClick={() => setModalShow(true)}>
          <Icon icon="bxs:wallet" className='btn-icon'/> {" "} {!true ? "Disconnect " : "Connect "} Wallet
        </Button> */}
      </div>
      }
      <ConnectModal show={modalShow} onHide={() => setModalShow(false)}/>
    </header>
  )
}

export default Header
