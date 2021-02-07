const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
// get endpoint
// I wont need get because server isn't sending anything to client
// client is sending
app.post('/calculations', (req, res) => {
  res.sendStatus(200);
});
