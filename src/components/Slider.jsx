import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = () => {
  return (
    <div className="slider">
      <Carousel fade variant="dark" style={{ height: "20rem" }}>
        <Carousel.Item>
          <img
            style={{ height: "20rem" }}
            className="d-block w-100"
            src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5"
            alt="First slide"
          />
          <Carousel.Caption className="slideText">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "20rem" }}
            className="d-block w-100"
            src="https://c.stocksy.com/a/QCZ500/z9/1326950.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="slideText">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "20rem" }}
            className="d-block w-100"
            src="https://c.stocksy.com/a/suV800/z9/2029314.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="slideText">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
