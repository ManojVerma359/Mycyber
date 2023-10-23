import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { Accrdnradius } from "./Iconimage";
import { Accrdnradius_bttm } from "./Iconimage";
// import { AccordianBtn } from "./IconImage";

function BasicExample() {
  return (
    <>
      <div>
        <div className="bg-black pb-5 pt-4">
          <Container className="pb-lg-5 pt-xl-4 my_container ">
            <h3 className="fs-64 fw-400 ff-adio text-white text-center pt-4  mt-2 position-relative ">
              Faq
            </h3>
            <div className="faq_line text-center d-none d-lg-block"></div>
            <Accordion className="mx-auto pb-xl-5 mt-lg-5 pt-lg-5 pt-4">
              <Accordion.Item eventKey="0">
                <Accrdnradius_bttm />
                <Accordion.Header className="ff-mont fw-600 fs-24 text-white Accordion_Header">
                  Dui lectus auctor fermentum potenti enim. ?
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body className="fs-16 fw-400 ff-mont">
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-4">
                <Accrdnradius_bttm />
                <Accordion.Header>
                  Placerat eros faucibus aliquam nunc, mattis
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body className="fs-16 fw-400 ff-mont">
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-4">
                <Accrdnradius_bttm />
                <Accordion.Header>
                  Lorem nunc nunc risus viverra a
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body className="fs-16 fw-400 ff-mont">
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-4">
                <Accrdnradius_bttm />
                <Accordion.Header>
                  In aliquet fusce id dictumst id
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body className="fs-16 fw-400 ff-mont">
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mt-4">
                <Accrdnradius_bttm />
                <Accordion.Header>
                  Elementum pellentesque nisi, sagittis,{" "}
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body className="fs-16 fw-400 ff-mont">
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
