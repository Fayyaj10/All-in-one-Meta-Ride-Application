const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const estimateRoute = require('./routes/estimate');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/estimate', estimateRoute);


app.listen(3000, () => {
console.log('Backend running on port 3000');
});