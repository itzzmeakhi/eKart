import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import Rating from '../../components/Rating/Rating';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { fetchProduct } from './../../redux/products/actions';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const product = useSelector(state => state.pdp.product);
  const loading = useSelector(state => state.pdp.loading);
  const error = useSelector(state => state.pdp.error);

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
                        <Col>Price: </Col>
                        <Col>{product.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status: </Col>
                        <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        className='btn-block'
                        style={{ width: '100%' }}
                        type='button'
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