

open("https://login.yahoo.com");
var email = prompt("Please enter your email in the box");
$("#login-username").text(email);
$("login-signin").click();

$(document).ready(function () {

    var txt = $(".username").val();
    if (txt === "Hello" + email) {
        alert("correct username, please enter your password now");
         }

})

