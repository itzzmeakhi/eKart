import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../Product/Product';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';

import { fetchProducts } from './../../redux/products/actions';

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const products = useSelector(state => state.products.productsList);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  return (
    <>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant={'danger'}>{error}</Message>
    ) : (
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
    </Row>
    )}
    </>
  );
}

export default ProductList;

