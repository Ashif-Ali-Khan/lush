import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

export const NavBar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        bg="info"
        variant="dark"
        expand="lg"
        className="navitems"
      >
        <Container fluid>
          <Navbar.Brand className="brand" href="#">
            Brand
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <b>HOME</b>
              </Nav.Link>
              <Nav.Link href="#action2">
                <b>ABOUT US</b>
              </Nav.Link>

              <Nav.Link href="#">
                <b>CONTACT US</b>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className="me-2 my-2 my-lg-0 "
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Button variant="outline-success" className="right-btn ">
                Register
              </Button>
              <Button variant="outline-success" className="right-btn ">
                Log-In
              </Button>
              <Button variant="outline-success" className="right-btn ">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined color="light" />
                </Badge>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
