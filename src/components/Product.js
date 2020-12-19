import React from "react";
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle,
    Button,
    Input
} from "reactstrap";
import { showPrice } from "../utils/utils.js";
import ProductQty from "./ProductQty.js";
const Product = ({id, imageName, bagTitle, bagDescription, addToCart, price, qty, incrementQty, decrementQty}) => {
    return (    <Card className="product">
                    <CardImg top width="100%" src={process.env.REACT_APP_CDN_IMAGE_PATH + imageName} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{bagTitle}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">${showPrice(price)}</CardSubtitle>
                        <CardText>{bagDescription}</CardText>
                        <ProductQty id={id} qty={qty} incrementQty={incrementQty} decrementQty={decrementQty} />
                        <Button color="success" onClick={() => addToCart(id)}>Add to cart</Button>

                    </CardBody>
                </Card>
            );
}

export default Product;