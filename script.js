$(document).ready(function(){

	var webname = window.location.hostname;
console.log(webname);

$("body").append("<audio autoplay src="+webname+".mp3></audio>");
	});
