//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello0</h1>Hello");
});

app.get("/about", function (req, res) {
    res.send("<h1>About ME</h1>");
});

app.listen(3000);
