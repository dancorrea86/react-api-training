
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  
  res.send("ola");
});

app.post('/post', (req, res) => {
  //console.log(req.body.text)
  let value = parseInt(req.body.text) + 1
  console.log(value)
  res.send({value});
});




app.listen(port, () => console.log(`Listening on port ${port}`));