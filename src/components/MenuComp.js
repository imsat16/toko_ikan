import {React, useState, useEffect} from 'react';
import {
  Card,
  Row,
  Col,
  InputGroup,
  FormControl,
  CardGroup,
  Button,
  Accordion,
  Form,
} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';
import axios from 'axios';
import {SIBIRU} from '../assets/image/indexImg';

function MenuComp () {
  const url = 'http://localhost:3001';
  const [itemList, setItemList] = useState ([]);
  const [newNamaIkan, setNewNamaIkan] = useState ('');
  const [newDeskripsiIkan, setNewDeskripsiIkan] = useState ('');
  const [newImgIkan, setNewImgIkan] = useState ('');

  const updateNama = id_ikan => {
    window.location.reload ();
    axios
      .put ('http://localhost:3001/updatenamaikan', {
        nama_ikan: newNamaIkan,
        deskripsi_ikan: newDeskripsiIkan,
        img_ikan: newImgIkan,
        id_ikan: id_ikan,
      })
      .then (response => {
        // alert ('update');
        setItemList (
          itemList.map (val => {
            return val.id_ikan === id_ikan
              ? {
                  id_ikan: val.id_ikan,
                  nama_ikan: newNamaIkan,
                  deskripsi_ikan: newDeskripsiIkan,
                  img_ikan: newImgIkan,
                }
              : val;
          })
        );
      });
  };

  // const getikanid = id_ikan => {
  //   axios
  //     .get (url + `/getikanid/${id_ikan}`)
  //     .then (response => {
  //       return setItemList (
  //         // response.data, id_ikan
  //         itemList.filter (itemList => {
  //           return itemList.id_ikan === id_ikan;
  //         })
  //       );
  //     })
  //     .catch (error => {
  //       console.error ('\n\nerror', error);
  //       return [];
  //     });
  // };

  const deleteIkan = id_ikan => {
    axios.delete (url + `/deleteikan/${id_ikan}`).then (response => {
      setItemList (
        itemList.filter (val => {
          return val.id_ikan !== id_ikan;
        })
      );
    });
  };

  useEffect (() => {
    axios
      .get (url + '/getallikan')
      .then (res => {
        console.log (res);
        setItemList (res.data);
      })
      .catch (err => {
        console.log (err);
      });
  }, []);
  return (
    <Row>
      <Col>
        <CardGroup>
          <InputGroup className="mb-2">
            <FormControl
              placeholder="Cari yang anda inginkan"
              aria-label="Cari yang anda inginkan"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
          </InputGroup>
          <Row xs={1} md={3} lg={4} className="nyekrol">
            {itemList.map (itemList => (
              <Col className="my-2" key={itemList.id_ikan}>
                <Card>
                  {/* <Card.Img variant="top" src={itemList.img_ikan} /> */}
                  <Card.Img variant="top" src={SIBIRU} />
                  <Card.Body>
                    <Card.Title>{itemList.nama_ikan}</Card.Title>
                    <Card.Text>
                      {itemList.deskripsi_ikan}
                    </Card.Text>
                    <Accordion className="mb-3">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Edit</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <label>Nama Ikan</label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder={itemList.nama_ikan}
                              onChange={event => {
                                setNewNamaIkan (event.target.value);
                              }}
                            />
                          </div>
                          <div className="my-3">
                            <label>Deskripsi</label>
                            <Form.Control
                              size="sm"
                              as="textarea"
                              placeholder={itemList.deskripsi_ikan}
                              onChange={event => {
                                setNewDeskripsiIkan (event.target.value);
                              }}
                            />
                          </div>
                          <div>
                            <label>Foto Ikan</label>
                            <Form.Control
                              onChange={event => {
                                setNewImgIkan (event.target.value);
                              }}
                              type="file"
                              placeholder={itemList.img_ikan}
                              size="sm"
                            />
                          </div>
                          <Button
                            className="mt-3"
                            onClick={() => {
                              updateNama (itemList.id_ikan);
                            }}
                          >
                            Update
                          </Button>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className="d-flex justify-content-between float-end ">
                      {/* <small
                        className="d-flex pointer-button justify-content-center align-items-center"
                        variant="primary"
                        onClick={() => getikanid (itemList.id_ikan)}
                      >
                        DETAIL
                      </small> */}
                      <Button
                        className="h-25"
                        variant="danger"
                        onClick={() => {
                          deleteIkan (itemList.id_ikan);
                        }}
                      >
                        <small>
                          DELETE
                        </small>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Col>
    </Row>
  );
}

export default MenuComp;
