import React from "react";
import {
    Col, Row, Container,
} from "reactstrap";
import CartModal from "../components/CartModal";
import Product from "../components/Product";
import Navigation from "../page/Navigation";

class ProductList extends React.Component {
    state = {
        isOpen: false,
        bags: [
            {id: 1, imageName: "bag-1.jpg", price: 490, qty:1, bagTitle: "Gucci", bagDescription: "Gucci products are made with carefully selected materials. Please handle with care for longer product life."},
            {id: 2, imageName: "bag-2.jpg", price: 510, qty:1, bagTitle: "Louis Vuitton", bagDescription: "Louis Vuitton Since 1854 Onthego GM Bag	"},
            {id: 3, imageName: "bag-1.jpg", price: 800, qty:1, bagTitle: "Gucci", bagDescription: "Gucci products are made with carefully selected materials. Please handle with care for longer product life."},
            {id: 4, imageName: "bag-2.jpg", price: 599, qty:1, bagTitle: "Gucci", bagDescription: "Gucci products are made with carefully selected materials. Please handle with care for longer product life."},
            {id: 5, imageName: "bag-1.jpg", price: 549, qty:1, bagTitle: "Gucci", bagDescription: "Gucci products are made with carefully selected materials. Please handle with care for longer product life."}
        ],
        cartDetails: [],
        isModalOpen: false
    }

    modalToggle = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen // true || false
        })
    }

    // const [isOpen, setIsOpen] = useState(false);

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    incrementQty = (id) => {
        // console.log(id);
        const filteredItem = this.state.bags.filter(bag => bag.id === id).pop(); // filteredItem[0]
        filteredItem.qty = filteredItem.qty + 1;
        this.setState({
            ...this.state.bags,
            bags: this.state.bags
        })
    }

    decrementQty = (id) => {
        const filteredItem = this.state.bags.filter(bag => bag.id === id).pop(); // filteredItem[0]

        if ( filteredItem.qty > 1 ) {
            filteredItem.qty = filteredItem.qty - 1;
            this.setState({
                ...this.state.bags,
                bags: this.state.bags
            })
        }else{
            alert(`[${filteredItem.bagTitle}] Qty should be greater than 0`);
        }
    }

    addToCartHandler = (id) => {
        const filteredItem = this.state.bags.filter(bag => bag.id === id); // filteredItem[0]

        if ( filteredItem[0].qty > 0 ) {
            let cartItems = this.state.cartDetails;
            cartItems.push(filteredItem[0]);
            this.setState({
                cartDetails: cartItems
            })
        }else{
            alert(`[${filteredItem[0].bagTitle}] Qty should be greater than 0 before adding to the cart`);
        }
    }

    removeItem = (id) => {
        const index = this.state.cartDetails.findIndex((item) => item.id === id);
        this.state.cartDetails.splice(index, 1);

        this.setState({
            cartDetails: this.state.cartDetails
        })
    }

    checkout = () => {
        console.log('Checkout all the items');
    }

    render() {
        return(
            <React.Fragment>
            <Navigation {...this.state} totalItems={this.state.cartDetails.length} toggle={this.toggle} modalToggleHandler={this.modalToggle}/>
            <Container className="listing-container">
                <Row>
                    {this.state.bags.map(bag => <Col sm="4" className="mt-3">
                        <Product {...bag} addToCart={this.addToCartHandler} decrementQty={this.decrementQty} incrementQty={this.incrementQty}/>
                    </Col>)}
                </Row>
            </Container>
            {this.state.isModalOpen &&
                <CartModal modalToggleHandler={this.modalToggle} checkoutHandler={this.checkout} cartItems={this.state.cartDetails} removeItemHandler={this.removeItem}/>
            }
            
        </React.Fragment>
        );
    }
}

export default ProductList;