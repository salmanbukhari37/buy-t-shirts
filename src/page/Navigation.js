import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText
} from "reactstrap";

const Navigation = ({toggle, isOpen, totalItems, modalToggleHandler}) => {
    var cartBtnTitle = "";

    if ( totalItems > 1 ) {
        cartBtnTitle = `${totalItems} items in cart`;
    }else{
        cartBtnTitle = `${totalItems} item in cart`;
    }

    return (<div>
        <Navbar color="light" light expand="md">
            <NavbarBrand >Bag Shop</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            </Nav>
                <NavbarText>{totalItems > 0 ? <button className="success" onClick={modalToggleHandler}>{cartBtnTitle}</button> : "Empty cart" }</NavbarText>
            </Collapse>
        </Navbar>
    </div>);
};

export default Navigation;