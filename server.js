
const express = require('express');
var path = require('path');

const app = express();

// default landing page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('App listening on port 3000!'));
