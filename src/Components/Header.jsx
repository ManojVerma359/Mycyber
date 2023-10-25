import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navlogo from "../assets/image/navlogo.png";
import { Link } from "react-router-dom";
import menu from "../assets/image/menu.png";
import robotimg from "../assets/image/robotimg.png";
import { Twitter } from "./Iconimage";
import { Instagram } from "./Iconimage";
import { Discoard } from "./Iconimage";
const Header = () => {
  return (
    <>
      <div className="bg_img  ">
        <nav>
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <img src={navlogo} alt="navlogo" className="" />
              <ul
                id="navbar"
                className="d-flex gap-4 mb-0 flex-column list-unstyled flex-lg-row justify-content-center align-items-center phone_screen z_index_3"
              >
                <li className="link hover_border position-relative">
                  <Link
                    to="/"
                    onClick={opennav}
                    className="nav-link text-white fs-16 fw-400 ff-adio"
                  >
                    About
                  </Link>
                </li>
                <li className="link hover_border position-relative">
                  <Link
                    to="/Gameplay"
                    onClick={opennav}
                    className="text-white fs-16 fw-400 ff-adio nav-link"
                  >
                    CryptoStraps
                  </Link>
                </li>
                <li className="link hover_border position-relative">
                  <Link
                    to="/CyberFPS"
                    onClick={opennav}
                    className="text-white fs-16 fw-400 ff-adio nav-link"
                  >
                    Team
                  </Link>
                </li>
                <li className="link hover_border position-relative">
                  <Link
                    to="/Myaccordion"
                    onClick={opennav}
                    className="text-white fs-16 fw-400 ff-adio nav-link"
                  >
                    Faq
                  </Link>
                </li>
                <li className="link hover_border position-relative">
                  <Link
                    to="/Solana"
                    onClick={opennav}
                    className="text-white fs-16 fw-400 ff-adio nav-link"
                  >
                    Light Paper
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-baseline nav_button gap-2 position-relative z-1">
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
              <div
                id="menubtn-icon"
                onClick={opennav}
                className="d-lg-none d-block z_index_3 pe-2 pt-2"
              >
                <div className="line"></div>
                <div className="line1 my-2"></div>
                <div className="line2"></div>
              </div>
            </div>
          </Container>
        </nav>
        <Container className="d-flex flex-grow-1">
          <div className="w-100">
            <Row className="h100">
              <Col className="d-flex flex-column justify-content-center align-center" lg={6}>
                <img className="menulogo" src={menu} alt="#id" />
                <p className="fs-28 fw-400 ff-adio text-white">
                  Web3 Gaming Reimagined
                </p>
                <div className="d-flex gap-4 pt-5">
                  <button className="fs-16 fw-400 ff-adio  getbtn btn-hover">
                    Get Started
                  </button>
                  <button className="fs-16 fw-400 ff-adio  learnbtn">
                    Learn More
                  </button>
                </div>
              </Col>
              <Col className="robot " lg={6}>
                <img className="w-100" src={robotimg} alt="#id" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
function opennav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hiddden");
  document.getElementById("menubtn-icon").classList.toggle("cross");
}

export default Header;
