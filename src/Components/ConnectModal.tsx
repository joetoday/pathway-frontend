import { Icon } from '@iconify/react';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import QRCode from 'react-qr-code';

const ConnectModal = (props: any) => {
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
            <div className="connect-type-btns">
                <Button variant="light" className='active'> <Icon icon="ion:cube-sharp" /> {" "} QR Code</Button>
                <Button variant="light"> <Icon icon="ion:cube-sharp" /> {" "} QR Code</Button>
            </div>
            <div className="connect-info">Scan QR code with a WalletConnect-compatible wallet.</div>
            <div className="qr-code">
                <QRCode value="Demo Value" />
            </div>
            <div className="copy-text">Copy to clipboard</div>
        </Modal.Body>
    </Modal>
  )
}

export default ConnectModal
