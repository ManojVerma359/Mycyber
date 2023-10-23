import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import whatsectimg from "../assets/image/whatsectimg.png"

const CyberFPS = () => {
  return (
    <>
      <div className="bg_imgwhat">
        <Container className="my_container pt-5 pb-5">
          <Row className="pt-5 pb-5 align-items-center">
            <Col className="pe-3" lg={6}>
              <h2 className="fs-64 fw-400 ff-adio text-black">
                What is{" "}
                <span className="fs-64 fw-400 ff-adio Fps_text fps_line position-relative">
                  CyberFPS
                </span>
              </h2>
              <p className="fs-16 fw-400 ff-mont around_text pt-3">CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
              <p className="fs-16 fw-400 ff-mont around_text pt-3">CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
            </Col>
            <Col className="ps-3" lg={6}>
                <img className="w-100 pt-3 pt-lg-0 " src={whatsectimg} alt="#id" />
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
};

export default CyberFPS;
