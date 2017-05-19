
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
		var newtweet = "<div class = 'tweet-container'>" +  "<div class = 'tweet-time'>" + new Date(tweet.time).toLocaleString()+ "</div>" +
						"<div class = 'tweet-body'>" + tweet.text + "</div>" +
						 "</div>";
		$('.tweet-target').prepend(newtweet);
	}

$('.button1').click(function () { console.log (JSON.stringify($('#BT').val()));

	$.ajax({
		type: "POST",
		url: "/ajax",
		contentype:'application/json',
		data: JSON.stringify({tweet: $('#BT').val()}),
		success: function(data){
			appendtweet(data);
			$('#BT').val('');
		}

	})
});


