const express = require('express');
const server = express();

server.use(express.static("public"));

server.use(express.urlencoded({extended: true}));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true //Not using cache
});

server.get("/", (req, res) => {
    return res.render("index.html")
});

server.get("/euro", (req, res) => {
    return res.render("euro.html")
});

server.get("/libra", (req, res) => {
    return res.render("libra.html")
});

// server.listen(process.env.PORT || 5000);

server.listen(5000);