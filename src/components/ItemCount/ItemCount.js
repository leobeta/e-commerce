import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Button,
  FormControl,
} from 'react-bootstrap';
function ItemCounter() {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount((num) => num + 1);
  }

  function decrementar() {
    setCount((num) => num - 1);
  }

  return (
    <Container fluid='md'>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Camisa Tiger</Card.Title>
              <Card.Text>
                <InputGroup>
                  <InputGroup.Prepend>
                    <Button variant='outline-danger' onClick={decrementar}>
                      -
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    className='text-center'
                    aria-describedby='basic-addon1'
                    value={count}
                  />
                  <InputGroup.Append>
                    <Button variant='outline-success' onClick={incrementar}>
                      +
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Button variant='primary'>Agregar al Carrito</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemCounter;
