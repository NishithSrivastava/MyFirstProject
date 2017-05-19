var express = require ('express');

var bodyParser = require ('body-parser');

var app = express();

app.use(bodyParser.json());



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

app.post('/ajax', function(request, response){

	var y = request.body.tweet;
	var ntweet = { text: y, time: new Date().getTime()};
	tweets.push(ntweet);
	response.type('json');
	response.end(JSON.stringify(ntweet));

});

var server = app.listen(8090, function() {
	console.log("Server running on localhost:8090");
} );

