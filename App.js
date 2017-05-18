var express = require ("express");

var app = express();

var bodyparser = require ("bodyparser");

app.use(bodyparser.json());

app.use(express.static(__dirname+ '/public'));

