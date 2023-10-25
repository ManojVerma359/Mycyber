import React from "react";
import { Container } from "react-bootstrap";
import footerimg1 from "../assets/image/footrimg1.png";
import footerimg2 from "../assets/image/footrimg2.png";
import footerlogo from "../assets/image/footerlogo.png";
import { Twitter } from "./Iconimage";
import { Instagram } from "./Iconimage";
import { Discoard } from "./Iconimage";

const Solana = () => {
  return (
    <>
      <div className="bg_imgsalona">
        <Container className="pt-120 pb-120">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 pt-5 pb-5">
            <img className="width_100" src={footerimg2} alt="#id" />
            <img className="width_100" src={footerimg1} alt="#id" />
          </div>
        </Container>
      </div>

      <div className="ftrimage">
        <Container className="my_container">
          <div className="d-flex flex-column align-items-center justify-content-center pt-4">
            <img src={footerlogo} alt="#id" />
            <div className="d-flex gap-3 pt-3 pb-4">
              <div className="hov">
                <Twitter />
              </div>
              <div className="hov1">
                <Instagram />
              </div>
              <div className="hov1">
                <Discoard />
              </div>
            </div>
          </div>
        </Container>
        <div className="text-center">
          <hr className="fline" />
          <p className="fs-16 fw-400 ff-mont text-white pt-3 pb-3">
            © Cyber FPS 2022
          </p>
        </div>
      </div>
    </>
  );
};

export default Solana;
