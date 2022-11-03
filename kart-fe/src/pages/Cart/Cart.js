import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Form, Button, Card } from 'react-bootstrap';
import { useParams, useLocation, Link } from 'react-router-dom';

import { addItemToCart, removeItemFromCart } from '../../redux/cart/actions';
import Message from '../../components/Message/Message';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const { id } = useParams();
    const location = useLocation();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    
    useEffect(() => {
        if(id) {
            dispatch(addItemToCart(id, qty));
        }
    }, [ dispatch, id, qty ]);

    return (
        <Row>
            <Col md={8}>
                <h1 className='my-3 px-3'> Shopping Cart </h1>
                {cartItems.length === 0 ? <Message>Your cart is empty. <Link to='/'>Go Back</Link></Message> : (
                    <ListGroup variant='flush'>
                        {cartItems.map(cartItem => (
                            <ListGroup.Item key={cartItem.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={cartItem.image} alt={cartItem.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${cartItem.product}`}>
                                            {cartItem.name}
                                        </Link>
                                    </Col>
                                    <Col md={2}>
                                        Rs. {cartItem.price}
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as='select'
                                            value={cartItem.qty}
                                            onChange={(evt) => dispatch(addItemToCart(cartItem.product, Number(evt.target.value)))}>
                                                {[...Array(cartItem.countInStock).keys()].map(x => (
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant='light' type='button' onClick={() => dispatch(removeItemFromCart(cartItem.product))}>
                                           <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2> Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items </h2>
                            Rs. {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length === 0}>
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default Cart;