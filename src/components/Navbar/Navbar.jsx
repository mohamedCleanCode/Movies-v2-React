import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="navbar">
      <Container>
        <Row className="justify-content-between w-100 align-items-center">
          <Col sm={2} className="logo">
            <img
              src="https://e1.pngegg.com/pngimages/974/699/png-clipart-movies-and-popcorn-folder-icon-movies.png"
              alt="logo"
              className="rounded-circle"
            />
          </Col>
          <Col sm={10} className="input-search">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search a movie..."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
