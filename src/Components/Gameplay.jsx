import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gifimg from "../assets/image/playgif.gif";
import right_angle from "../assets/image/right_angle.png";
import left_angle from "../assets/image/left_angle.png";
import manyline from "../assets/image/manyline.png";
import Videobtn from "../assets/image/btnvideo.png";

const Gameplay = () => {
  return (
    <>
    <div className="overflow-hidden">
      <Container className="mt-5 mb-3">
        <div className="flex-column text-center pt-5">
          <h2 className="fs-64 fw-400 ff-adio text-black position-relative game_line">
            CyberFPS{" "}
            <span className="fs-64 fw-400 ff-adio play_text">Gameplay</span>
          </h2>
          <Row className="d-flex  justify-content-center">
            <Col sm={11}>
              <div className=" position-relative mt-5   pb-3  pt-4">
                <img className="videobtn" src={Videobtn} alt="#id" />
                <img className="side_angle " src={right_angle} alt="#id" />
                <img className="leftside_angle " src={left_angle} alt="#id" />
                <img className="manyline manyline1" src={manyline} alt="#id" />
                <img className="manyline1" src={manyline} alt="#id" />
                <div className="layer1"></div>
                <div className="layer2"></div>
                <img src={Gifimg} className="w-100 " />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Gameplay;
