import React, {useState} from 'react';
import {Card, Col, Button, Form, FloatingLabel} from 'react-bootstrap';
import {FaPlus} from 'react-icons/fa';
import axios from 'axios';

function AddComp () {
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
    <div>
      <Card className="detailIkan d-none d-md-block" style={{width: 'auto'}}>
        <Card.Header className="text-center text-muted">
          <strong>ADD FISH</strong>
        </Card.Header>
        <Card.Body>
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
        </Card.Body>
        <Card.Body>
          <Button
            className="rounded-pill float-end d-flex justify-content-center align-items-center"
            onClick={addIkan}
          >
            <FaPlus className="me-2" />ADD
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddComp;
