import { Icon } from '@iconify/react';
import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import QRCode from 'react-qr-code';
import { Connector, useConnect } from "wagmi";
import IMAGES from '../Utils/walletIcons';

const ConnectModal = (props: any) => {
    const [isQR, setIsQR] = useState<boolean>(false)
    const { connect, connectors, isLoading, pendingConnector } = useConnect();

    const getConnectorImage = (connector: Connector) => {
        const data = IMAGES.find((item) => item.name.toLowerCase() === connector.name.toLowerCase());
        if (data) return data?.image;
        else return undefined;
      };

  return (
    <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='main-modal'
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            WalletConnect
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="connect-type-btns" style={{display: 'none'}}>
                <Button variant="light" className={isQR ? 'active' : ''} onClick={() => setIsQR(true)}> <Icon icon="ion:cube-sharp" /> {" "} QR Code</Button>
                <Button variant="light" className={!isQR ? 'active' : ''} onClick={() => setIsQR(false)}> <Icon icon="ion:cube-sharp" /> {" "} Desktop</Button>
            </div>
            {isQR ?
                <>
                    <div className="connect-info">Scan QR code with a WalletConnect-compatible wallet.</div>
                    <div className="qr-code">
                        <QRCode value="Demo Value" />
                    </div>
                    <div className="copy-text">Copy to clipboard</div>
                </>
                :
                <>
                    {connectors.map((connector) => (
                        <button
                        className="connector-button"
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => {
                            connect({ connector });
                        }}
                        >
                        <span className="connector-button-text">{connector.name}</span>
                        {!connector.ready && " (unsupported)"}
                        {isLoading && connector.id === pendingConnector?.id && " (connecting)"} {" "}
                        <img src={getConnectorImage(connector)} width={32} height={32} alt={connector.name} />
                        </button>
                ))}
                </>
            }
            
        </Modal.Body>
    </Modal>
  )
}

export default ConnectModal
