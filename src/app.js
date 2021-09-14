const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render("index.html");
});

var server = app.listen(process.env.PORT || 5000, () => {
    console.log("Running on port 5000");
});

module.exports = server;