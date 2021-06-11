import React from 'react';
import { Alert, Container, Row, Col } from 'react-bootstrap';

function ItemListContainer(props) {
  return (
    <Container fluid='md'>
      <Row>
        <Col>
          <Alert variant='primary'>Bienvenido {props.greeting}</Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
