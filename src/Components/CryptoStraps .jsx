import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Csimg from "../assets/image/Csimg.png";

const CryptoStraps = () => {
  return (
    <>
      <div className="bg-black">
        <Container className="my_container">
          <div className="pt-4 pb-4">
            <Row className="pt-5 pb-5 align-items-center justify-content-center">
              <Col lg={4} className="pe-lg-5 ">
                <img className="w-100" src={Csimg} alt="#id" />
              </Col>
              <Col lg={6} className="ps-lg-5  pt-lg-o pt-5">
                <h2 className="position-relative">
                  <span className="fs-64 fw-400 ff-adio text-white cry_line">
                    CryptoStraps
                  </span>{" "}
                </h2>
                <p className="fs-16 fw-400 ff-mont cry_text pt-2">CryptoStraps are firearms pushing the boundaries of 3D animated art. CyberFPS will be powered by CryptoStraps $AMMO and is directly integrated with the existing CryptoStraps NFTs. You will be able to use CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are designed by the CryptoStraps 3D Studio.</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CryptoStraps;
