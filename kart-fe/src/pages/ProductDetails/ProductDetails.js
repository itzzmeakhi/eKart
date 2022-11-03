import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import Rating from '../../components/Rating/Rating';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { fetchProduct } from './../../redux/products/actions';

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const product = useSelector(state => state.pdp.product);
  const loading = useSelector(state => state.pdp.loading);
  const error = useSelector(state => state.pdp.error);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <>
      {loading ? (<Loader />) : (
        <>
          <Link className='btn btn-light my-3' to='/'>Go Back</Link>
          {error ? (
            <Message variant={'danger'}>{error}</Message>
          ) : (
            <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Price Rs.{product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card variant='flush'>
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Col md={4}>Price: </Col>
                        <Col>{product.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col md={4}>Status: </Col>
                        <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                      </Row>
                    </ListGroup.Item>
                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col md={4}>Qty: </Col>
                          <Col>
                            <Button 
                              size='sm' 
                              variant='danger' 
                              className='mx-2' 
                              disabled={qty === 1}
                              onClick={() => setQty(qty - 1)}>
                                -
                            </Button>
                            {qty}
                            <Button 
                              size='sm' 
                              variant='success' 
                              className='mx-2' 
                              disabled={qty === product.countInStock}
                              onClick={() => setQty(qty + 1)}>
                                +
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                      <Button
                        className='btn-block'
                        style={{ width: '100%' }}
                        type='button'
                        onClick={() => addToCartHandler()}
                        disabled={product.countInStock === 0}>
                          Add to Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )}
        </>
      )}
    </>
  );
}

export default ProductDetails;