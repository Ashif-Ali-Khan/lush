import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const Cards = () => {
  return (
    <div>
      <Container>
        <Row className="productCards">
          <Col sm className="productItems">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.preedaproducts.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-06-26-at-07.24.44-1.jpeg"
              />
              <Card.Body>
                <Card.Title>hou</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Link href="#">
                  <Button variant="outline-info">
                    <b>BUY NOW</b>
                  </Button>{" "}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="productItems">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.preedaproducts.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-06-26-at-07.24.44-1.jpeg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Link href="#">
                  <Button variant="outline-info">
                    <b>BUY NOW</b>
                  </Button>{" "}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="productItems">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.preedaproducts.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-06-26-at-07.24.44-1.jpeg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Link href="#">
                  <Button variant="outline-info">
                    <b>BUY NOW</b>
                  </Button>{" "}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
