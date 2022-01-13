import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const Footer = () => {
  return (
    <div>
      <Container className="footer">
        <Row>
          <Col style={{ textAlign: "center" }}>BRAND</Col>
          <Row style={{ alignItems: "center" }}>
            <Col>
              <Container>
                <Card style={{ width: "18rem" }}>
                  <Card.Header>Featured</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Container>
            </Col>

            <Col>
              <Container>
                <Card style={{ width: "18rem" }}>
                  <Card.Header>Featured</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Container>
            </Col>
            <Col>
              <Container>
                <Card style={{ width: "18rem" }}>
                  <Card.Header>Featured</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }}>Copyright</Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
