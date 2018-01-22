$(document).ready(function(){

	var url = window.location.hostname;
	var gh = "https://hootalex.github.io/chrome-extension/audio/";

$("body").append("<audio autoplay src="+gh+url+".mp3></audio>");

	});
