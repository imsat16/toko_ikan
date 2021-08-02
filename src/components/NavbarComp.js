import React, {useState} from 'react';
import {
  Navbar,
  Nav,
  Container,
  Image,
  Form,
  FloatingLabel,
  Col,
  Row,
  FormControl,
  Button,
  Modal,
} from 'react-bootstrap';
import {DEFAULTLOGO, SIBIRU} from '../assets/image/indexImg';
import axios from 'axios';
import {FaPlus} from 'react-icons/fa';

function MyVerticallyCenteredModal (props) {
  const url = 'http://localhost:3001';
  const [itemList, setItemList] = useState ([]);

  const [nama_ikan, setNamaIkan] = useState ('');
  const [deskripsi_ikan, setDeskripsiIkan] = useState ('');
  const [img_ikan, setImgIkan] = useState ('');

  const addIkan = () => {
    window.location.reload ();
    axios
      .post (url + '/addFish', {
        nama_ikan: nama_ikan,
        deskripsi_ikan: deskripsi_ikan,
        img_ikan: img_ikan,
      })
      .then (() => {
        setItemList ([
          ...itemList,
          {
            nama_ikan: nama_ikan,
            deskripsi_ikan: deskripsi_ikan,
            img_ikan: img_ikan,
          },
        ]);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD IKAN
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          controlId="floatingInput"
          label="Nama Ikan"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="nama ikan"
            onChange={event => {
              setNamaIkan (event.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          className="mb-3"
          label="Deskripsi Ikan"
          onChange={event => {
            setDeskripsiIkan (event.target.value);
          }}
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{height: '100px'}}
            onChange={event => {
              setImgIkan (event.target.value);
            }}
          />
        </FloatingLabel>
        <Form.Label>
          Gambar ikan
        </Form.Label>
        <Col>
          <Form.Control type="file" placeholder="Add Image" />
        </Col>
        <Button
          className="rounded-pill float-end d-flex justify-content-center align-items-center mt-3"
          onClick={addIkan}
        >
          <FaPlus className="me-2" />ADD
        </Button>
      </Modal.Body>
    </Modal>
  );
}

const NavbarComp = () => {
  const [modalShow, setModalShow] = React.useState (false);

  return (
    <div>
      {/* Desktop */}
      <Navbar variant="dark" className="d-none d-md-block">
        <Container fluid>
          <Navbar.Brand href="/">
            {/* <strong>TOKO</strong> IKAN */}
            <img
              src={DEFAULTLOGO}
              width="auto"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#" disabled>
              {/* <img
                src={IKANLOGO}
                width="auto"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /> */}
            </Nav.Link>
          </Nav>
          {/* <Button variant="outline-light" className="mx-2">
            <FaCartArrowDown />
          </Button> */}
          <h4>
            <FaPlus color="white"  className="pointer-button" onClick={() => setModalShow (true)} />
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
                  <FaPlus  color="white" onClick={() => setModalShow (true)} />
                </h4>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow (false)}
                />
              </Col>
              <Col>
                <Image
                  style={{width: '40px', height: '40px'}}
                  src={SIBIRU}
                  roundedCircle
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
