

console.log("Executing");

$(".btn").click(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (data) {

            for (var i = 0; i < data; i++) {
                var place = data
                var element = data[i];
                $(".div1").append('<h5>' + data[i].title + '</h5>');
                // $(".para1").text(JSON.stringify(data.results[1].city));
            }
        }
        ,
        dataType: 'jsonp',
    })
}
);

