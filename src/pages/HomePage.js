import React from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import {MenuComp, DetailComp, CategoriesComp} from '../components/indexComp';

function HomePage () {
  return (
    <div>
      <Container className="mt-3">
        <Row className="justify-content-between">
          {/* <Col md={2}>
            <CategoriesComp />
          </Col> */}
          <Col md={12}>
            <MenuComp />
          </Col>
          {/* <Col md={3}>
            <DetailComp />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
