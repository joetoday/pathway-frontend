import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserData } from "../context/UserContextProvider";
import { useAccount, useDisconnect } from "wagmi";
import { Icon } from '@iconify/react';
import ConnectModal from './ConnectModal';
import DisconnectModal from './DisconnectModal';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { address, connector: isConnected } = useAccount();
  const { disconnect } = useDisconnect(); 
  const [isDiconnectModalOpen, setIsDisconnectModalOpen] = useState<boolean>(false);


  const { isConnectModalOpen, setIsConnectModalOpen, setIsConnectModalAnimation } = useUserData();

  const handleClick = async () => {
    if(isConnected){
      disconnect();
      setIsDisconnectModalOpen(false);
      setIsConnectModalOpen(false);
      localStorage.removeItem("connectorId");
      window.location.reload();
    }
    else{
      setIsConnectModalAnimation(false);
      if (isConnectModalOpen) setIsConnectModalOpen(false);
      setIsConnectModalOpen(true);
    }
  };

 

  console.log(address)

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
        <Button variant='primary' className='btn-primary-text' onClick={handleClick}>
          <Icon icon="bxs:wallet" className='btn-icon'/> {" "} {isConnected ? "Disconnect " : "Connect "} Wallet
        </Button>
        <ConnectModal isModalOpen={isConnectModalOpen} setIsModalOpen={setIsConnectModalOpen} />
        <DisconnectModal
            address={address}
            isModalOpen={isDiconnectModalOpen}
            setIsModalOpen={setIsDisconnectModalOpen}
            disconnectWallet={handleClick}
          />
      </div>
      }
    </header>
  )
}

export default Header
