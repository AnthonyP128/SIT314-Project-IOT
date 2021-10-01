const express = require('express');
const app = express();

var options = {index: "operator.html"}

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.use('/', express.static('../client', options));