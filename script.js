$(document).ready(function(){

	var url = window.location.hostname;
	var gh = "https://hootalex.github.io/chrome-extension/audio/";

$("body").prepend("<audio autoplay src="+gh+url+".mp3></audio>");

	});
