import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Image,FormControl
} from 'react-bootstrap';
import {DEFAULTLOGO, SIBIRU} from '../assets/image/indexImg';

const NavbarComp = () => {
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

          <Image
            style={{width: '40px', height: '40px'}}
            src={SIBIRU}
            roundedCircle
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
            <Image
              style={{width: '40px', height: '40px'}}
              src={SIBIRU}
              roundedCircle
            />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
