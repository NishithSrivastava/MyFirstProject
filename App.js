var express = require ('express');

var app = express();

var bodyparser = require ('body-parser');

app.use(bodyparser.json());



var tweets = [
{text: "This is the first tweet", time: new Date().getTime() - 30000},
{text: "This is the second tweet", time: new Date().getTime() - 20000},
{text: "This is the third tweet", time: new Date().getTime() - 10000},
];



app.use(express.static(__dirname + '/public'));


app.get('/ajax', function(req, res) {

	res.type('json');
	res.end(JSON.stringify({tweets:tweets}));
});

app.post('/ajax', function(req, res){

	var tweet = { text: req.body.tweet, time: new Date().getTime()};
	tweets.push(tweet);
	res.type('json');
	res.end(JSON.stringify(tweet));

});

var server = app.listen(8090, function() {
	console.log("Server running on localhost:8090");
} );

