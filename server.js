const express = require('express');
const app = express();

app.use(express.static('public'))


app.get('/', function(req, res) {
    res.sendFile(__dirname+ "/index.html")
})






app.listen(3100, function() {
    console.log("Server Started on Port 3100")
})