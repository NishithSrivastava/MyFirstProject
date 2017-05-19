
$.ajax(
{
	type: "GET",
	url:"/ajax",
	success: function(data){
		for (var i = 0; i < data.tweets.length; i++) {
			appendtweet(data.tweets[i]);
													 };

							}
}
	  );

	function appendtweet(tweet){
		var newtweet = "<div class = 'tweet-target'>" +  "<div class = 'tweet-time'>" + new Date(tweet.time).toLocaleString()+ "</div>" +
						"<div class = 'tweet-body'>" + tweet.text + "</div>" +
						 "</div>";
		$('.tweet-target').prepend(newtweet);
	}

$('.button').click(function () {

	$.ajax({
		type: "POST",
		url: "/ajax",
		contentype:'application/json',
		data: JSON.stringify({tweet: $('.tweet-input').val()}),
		success: function(data){
			appendtweet(data);
			$('.tweet-input').val('');
		}

	});
});


