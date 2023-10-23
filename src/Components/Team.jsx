import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import girlimg1 from "../assets/image/girlimg1.png";
import girlimg2 from "../assets/image/girlimg2.png";
import manimg1 from "../assets/image/manimg1.png";
import manimg2 from "../assets/image/manimg2.png";

const Team = () => {
  return (
    <>
      <p className=" pt-5 position-relative text-center">
        <span className="fs-64 fw-400 ff-adio text-black  team_line">Team</span>
      </p>
      <Container className="my_container pb-4">
        <Row className="pt-3">
          <Col xl={3} lg={4} sm={6}>
            <img className="w-100 img" src={girlimg1} alt="#id" />
            <h3 className="fs-24 ff-mont fw-600 text-black pt-2">Collin</h3>
            <p className="fs-16 ff-mont fw-400 text-black ">Founder</p>
          </Col>
          <Col xl={3} lg={4} sm={6}>
            <img className="w-100 img" src={girlimg2} alt="#id" />
            <h3 className="fs-24 ff-mont fw-600 text-black pt-2">Pharaox</h3>
            <p className="fs-16 ff-mont fw-400 text-black ">Founder</p>
          </Col>
          <Col xl={3} lg={4} sm={6}>
            <img className="w-100 img" src={manimg1} alt="#id" />
            <h3 className="fs-24 ff-mont fw-600 text-black pt-2">Zach</h3>
            <p className="fs-16 ff-mont fw-400 text-black ">CM</p>
          </Col>
          <Col xl={3} sm={6}>
            <img className="w-100 img" src={manimg2} alt="#id" />
            <h3 className="fs-24 ff-mont fw-600 text-black pt-2">Arlen</h3>
            <p className="fs-16 ff-mont fw-400 text-black ">CM</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Team;
