const express = require ('express');
const app = express ();
const mysql = require ('mysql');
const cors = require ('cors');

app.use (cors ());
app.use (express.json ());

const db = mysql.createConnection ({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'db_toko_ikan',
});

app.post ('/addFish', (req, res) => {
  const nama_ikan = req.body.nama_ikan;
  const deskripsi_ikan = req.body.deskripsi_ikan;
  const img_ikan = req.body.img_ikan;

  db.query (
    'INSERT INTO tb_ikan (nama_ikan,deskripsi_ikan,img_ikan)VALUES(?,?,?)',
    [nama_ikan, deskripsi_ikan, img_ikan],
    (err, result) => {
      if (err) {
        console.log (err);
      } else {
        res.send ('Values Inserted');
      }
    }
  );
});

app.get ('/getallikan', (req, res) => {
  db.query ('SELECT * FROM tb_ikan ORDER BY id_ikan DESC', (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.send (result);
    }
  });
});

app.get ('/getikanid/:id_ikan', (req, res) => {
  const id_ikan = req.params.id_ikan;
  db.query ('SELECT * FROM tb_ikan WHERE id_ikan = ?', id_ikan, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.send (result);
    }
  });
});


app.put ('/updatenamaikan', (req, res) => {
  const id_ikan = req.body.id_ikan;
  const nama_ikan = req.body.nama_ikan;
  db.query (
    'UPDATE tb_ikan SET nama_ikan = ? WHERE id_ikan = ?',
    [nama_ikan, id_ikan],
    (err, result) => {
      if (err) {
        console.log (err);
      } else {
        res.send (result);
      }
    }
  );
});

app.delete ('/deleteikan/:id_ikan', (req, res) => {
  const id_ikan = req.params.id_ikan;
  db.query ('DELETE FROM tb_ikan WHERE id_ikan = ?', id_ikan, (err, result) => {
    if (err) {
      console.log (err);
    } else {
      res.send (result);
    }
  });
});

app.listen (3001, () => {
  console.log ('Your Server Is Running on port 3001');
});
