
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;


app.get('/api', (req, res) => {
  console.log(data.express)
  res.json({ 
    express: data.express,
    userId: data.userId });
});

axios.post('/post2')
  .then(res => {
    console.log(res)
  })

app.post('/post', (req, res) => {
  console.log('POST /')
})


app.listen(port, () => console.log(`Listening on port ${port}`));