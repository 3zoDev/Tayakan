/*eslint-disable*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionIcons() {
  React.useEffect(() => {});
  return (
    <>
      <div className="section section-icons">
        <Container fluid>
          <Row>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-left-icon nc-icon nc-planet add-animation" />
                <i className="second-left-icon nc-icon nc-touch-id add-animation" />
                <i className="third-left-icon nc-icon nc-lock-circle-open add-animation" />
                <i className="fourth-left-icon nc-icon nc-tap-01 add-animation" />
                <i className="fifth-left-icon nc-icon nc-zoom-split add-animation" />
                <i className="sixth-left-icon nc-icon nc-atom add-animation" />
                <i className="seventh-left-icon nc-icon nc-favourite-28 add-animation" />
                <i className="eighth-left-icon nc-icon nc-settings add-animation" />
                <i className="ninth-left-icon nc-icon nc-bulb-63 add-animation" />
                <i className="tenth-left-icon nc-icon nc-circle-10 add-animation" />
              </div>
            </Col>
            <Col className="text-center" md="6">
              <h2 className="title revealOnScroll">Lots of Questions</h2>
              <h5 className="description">
              Just register on the site, choose your course materials, start the development journey{" "}
                
              </h5>
              <br />
              <Button
                    className="btn-round"
                    outline
                    color="warning"
                    
                    onClick={() => props.history.push('/login')}
                  >
                    SIGN IN
                  </Button>
                  <Button
                    className="btn-round"
                    color="warning"
                    
                    onClick={() => props.history.push('/register')}
                  >
                    SIGN UP
                  </Button>
            </Col>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-right-icon nc-icon nc-bank add-animation" />
                <i className="second-right-icon nc-icon nc-tag-content add-animation" />
                <i className="third-right-icon nc-icon nc-bell-55 add-animation" />
                <i className="fourth-right-icon nc-icon nc-tv-2 add-animation" />
                <i className="fifth-right-icon nc-icon nc-map-big add-animation" />
                <i className="sixth-right-icon nc-icon nc-badge add-animation" />
                <i className="seventh-right-icon nc-icon nc-simple-add add-animation" />
                <i className="eighth-right-icon nc-icon nc-trophy add-animation" />
                <i className="ninth-right-icon nc-icon nc-hat-3 add-animation" />
                <i className="tenth-right-icon nc-icon nc-key-25 add-animation" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionIcons;
