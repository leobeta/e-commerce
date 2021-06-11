import React from 'react';
import { Alert, Container, Row, Col } from 'react-bootstrap';

function ItemListContainer(props) {
  return (
    <Container fluid='md'>
      <Row>
        <Col>
          <Alert variant='primary'>
            Bienvenido <strong>{props.greeting}</strong>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
