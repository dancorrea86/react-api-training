const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.send("ola");
});

app.post('/post', (req, res) => {
  
  
  res.send("ola");
});

app.listen(port, () => console.log(`Listening on port ${port}`));