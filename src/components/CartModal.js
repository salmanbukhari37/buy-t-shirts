import React, { useState } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Row,
    Col 
} from 'reactstrap';

const CartModal = (props) => {
    const {
        buttonLabel,
        className,
        toggle, 
        modal,
        modalToggleHandler,
        checkoutHandler,
        cartItems,
        removeItemHandler
    } = props;

    return (
        <div>
          <Modal isOpen={true} toggle={modalToggleHandler} className={className} size="lg">
            <ModalHeader toggle={modalToggleHandler}>Cart Page</ModalHeader>
            <ModalBody>
                {Array.isArray(cartItems) && cartItems.length > 0 && cartItems.map( ({imageName, bagDescription, bagTitle, id, price, qty}) => <Row>
                    <Col sm="2">
                        <img src={process.env.REACT_APP_CDN_IMAGE_PATH + imageName} width="75" height="90"/>
                    </Col>
                    <Col sm="2">
                        <p>{bagTitle}</p>
                    </Col>
                    <Col sm="2">
                        <p>{bagDescription}</p>
                    </Col>
                    <Col sm="2">
                        <p>[Qty]: {qty}</p>
                    </Col>
                    <Col sm="1">
                        <p>${price}</p>
                    </Col>
                    <Col sm="1">
                        <button className="btn btn-danger" onClick={() => removeItemHandler(id)}>Remove</button>
                    </Col>
                </Row>)}
                
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={checkoutHandler}>Checkout</Button>
              <Button color="danger" onClick={modalToggleHandler}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
    );
}

export default CartModal;