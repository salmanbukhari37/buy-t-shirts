import React from "react";
import {
    Button,
    Input
} from "reactstrap";
const ProductQty = ({qty, id, incrementQty, decrementQty}) => {
    return (
        <div className="product-qty">
            <Input type="number" value={qty} maxLength="0" />
            <Button onClick={() => incrementQty(id)}>+</Button>
            <Button onClick={() => decrementQty(id)}>-</Button>
        </div>
    )
}

export default ProductQty;