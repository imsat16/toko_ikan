import React, {useState} from 'react';
import axios from 'axios';
import {FaPlus} from 'react-icons/fa';
import {Form, FloatingLabel, Col, Button, Modal} from 'react-bootstrap';

export default function MyVerticallyCenteredModal (props) {
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
