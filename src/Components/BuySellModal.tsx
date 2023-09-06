import React, {useState} from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { Icon } from '@iconify/react'


const BuySellModal = (props: any) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleNext = () => {
        props.setModalSize("sm")
        props.setIsFinalStep(false)
    }
    
  return (
    <Modal
        {...props}
        size={props.modalSize}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='main-modal'
    >
        {props.modalSize === "md" &&
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.modalType} Index Token
            </Modal.Title>
        </Modal.Header>
        }
        <Modal.Body>
            {props.modalSize === "md" ?
            <>
                <div className="sectionReceive sectionTranx" /* className="sectionTranx" */>
                    <div className="tranxMax">
                        <div className="key">{props.modalType === "Buy" ? "Pay" : props.modalType}</div>
                        <div className="value">
                            <div className="balance">Balance: 0.231</div>
                            <div className="max">MAX</div>
                        </div>
                    </div>
                    <div className="tranxDetail">
                    <div className="t-wrapper t2-wrapper">
                        <div className="tranx-select-form">
                            <InputGroup>
                                <InputGroup.Text>
                                    <Icon icon="material-symbols:circle" />
                                </InputGroup.Text>
                                <Form.Select>
                                    {props.modalType !== "Buy" ?
                                    <>
                                        <option>Poly5</option>
                                    </>
                                    :
                                    <>
                                        <option>USDT</option>
                                        <option>DAI</option>
                                        <option>Matic</option>
                                    </>
                                    }
                                </Form.Select>
                            </InputGroup>
                        </div>
                        <div className="values">
                            <div className="value">0.001</div>
                            <div className="sub-value">$0.032</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="sectionReceive sectionTranx">
                    <div className="tranxMax">
                         <div className="key">Receive</div>
                    </div>
                    <div className="tranxDetail">
                        <div className="t-wrapper">
                            <div className="tranx-select-form">
                                <InputGroup>
                                    <InputGroup.Text>
                                        <Icon icon="material-symbols:circle" />
                                    </InputGroup.Text>
                                    <Form.Select>
                                        {props.modalType === "Buy" ?
                                        <>
                                            <option>Poly5</option>
                                        </>
                                        :
                                        <>
                                            <option>USDT</option>
                                            <option>DAI</option>
                                            <option>Matic</option>
                                        </>
                                        }
                                    </Form.Select>
                                </InputGroup>
                            </div>
                            <div className="values">
                                <div className="value">0.0062382938912</div>
                                <div className="sub-value">$0.00312</div>
                            </div>
                        </div>
                        {/* <div className="summary-bx">
                            <div className="detail" onClick={() => setIsOpened(prev => !prev)}>
                                <div className="text">Total Cost: 0.006323190123</div>
                                <div className={isOpened ? "opened icon" : "icon"}><Icon icon="bxs:down-arrow" /></div>
                            </div>
                            <div className={isOpened ? "open detail" : "detail"}>
                                <div className="text text-s">Network Fee: 0.0001239013</div>
                            </div>
                        </div> */}
                    </div>
                    <div className="tranxSummary">
                        <div className="summary-bx">
                            <div className="open detail">
                                <div className="text text-s"><b>Network Fee:</b> 0.0001239013</div>
                            </div>
                            <div className="detail">
                                <div className="text"><b>Total Cost:</b> 0.006323190123</div>
                            </div>
                        </div> 
                    </div>
                </div>
            </>    
            :
            <div className='sm-modal-body'>
                <div className="sm-icon">
                    {props.isFinalStep ? <Icon icon="bx:check" /> : <Icon icon="bx:wallet" /> }
                </div>
                <div className="sm-modal-text"> {props.isFinalStep ?  "Success!" : "Please approve transaction on your wallet."}</div>
            </div>
        }
        </Modal.Body>
        {!props.isFinalStep &&
             <Modal.Footer>
             {props.modalSize === "md" ?
             <>
                 <Button variant='link' onClick={() => props.onHide()}>Cancel</Button>
                 <Button variant='primary' className="btn-primary-text" onClick={() => handleNext()}>{props.modalType}</Button>
             </>
             :
             <Button variant='link' onClick={() => props.setIsFinalStep(true)}>Back</Button> 
             }
         </Modal.Footer>
        }
  </Modal>
  )
}

export default BuySellModal
