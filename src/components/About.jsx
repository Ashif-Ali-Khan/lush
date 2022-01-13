import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export const About = () => {
  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col>
            <Row>
              <Col sm={8}>
                <Container fluid>
                  <Row>
                    <Col>
                      <h1> ABOUT US </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col sm={4}>
                <Image
                  src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5"
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
