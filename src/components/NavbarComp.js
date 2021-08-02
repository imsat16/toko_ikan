import React from 'react';
import {
  Navbar,
  Container,
  Col,
  Row,
  FormControl,
} from 'react-bootstrap';
import {DEFAULTLOGO} from '../assets/image/indexImg';
import {FaPlus} from 'react-icons/fa';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


const NavbarComp = () => {
  const [modalShow, setModalShow] = React.useState (false);

  return (
    <div>
      {/* Desktop */}
      <Navbar variant="dark" className="d-none d-md-block">
        <Container fluid>
          <Navbar.Brand href="/toko_ikan">
            {/* <strong>TOKO</strong> IKAN */}
            <img
              src={DEFAULTLOGO}
              width="auto"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <h4>
            <FaPlus
              color="white"
              className="pointer-button"
              onClick={() => setModalShow (true)}
            />
          </h4>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow (false)}
          />
        </Container>
      </Navbar>

      {/* Mobile */}
      <Navbar fixed="top" className="d-md-none d-sm-block">
        <Container>
          <Navbar.Brand href="#home">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            {/* <img
              alt=""
              src={DEFAULTLOGO}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            /> */}
          </Navbar.Brand>
          <div className="d-md-none d-sm-block">
            {/* <Button variant="outline-light" className="mx-2">
              <FaCartArrowDown />
            </Button> */}
            <Row className="d-flex edit-button justify-content-center align-items-center">
              <Col>
                <h4>
                  <FaPlus color="white" onClick={() => setModalShow (true)} />
                </h4>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow (false)}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
