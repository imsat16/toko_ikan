import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import {FaFish, FaHome} from 'react-icons/fa';

function CategoriesComp () {
  return (
    <Card className="d-none d-md-block">
      <Card.Header className="text-center text-muted">
        <strong>CATEGORIES</strong>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><FaHome /> LIST IKAN</ListGroup.Item>
        <ListGroup.Item><FaFish /> ADD IKAN</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CategoriesComp;
