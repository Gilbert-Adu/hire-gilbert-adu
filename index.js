const express = require('express');
const app = express();
const path = require("path");



app.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname, "/index.html"));

});


app.set("view engine", "html");

app.listen(8000, () => {
    console.log("server listening")
});