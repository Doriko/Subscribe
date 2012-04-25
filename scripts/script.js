$(document).ready(function() {
	$("#email").focus(); //automatically focuses on the input box
	$("#subscribe").click(subscribe);
	$("#email").keydown(function (key) { //submiting using the 'enter' key
		if (key.which===13) {
			subscribe ();
		} else {
			// do nothing in here
		}
	});
});


//FUNCTIONS

function subscribe () {
var email = $("#email").val();
		if (email==="") { //checks if the input box is empty
			$("#add").css("border","2px solid red");
		} else {
			$("#add").css("border", "1px solid #e1e1e1");
			$.post("http://schonfeld.org/dor/subscribe.php", {email : email}, function(data) { //sends an AJAX req. with the email val.
				if (data.success) { //checks it was a valid email address
					$("#add").html("<p id='success'>"+data.message+"</p>");
				} else {
					alert(data.message);
				}
			}, "json");
		}
};