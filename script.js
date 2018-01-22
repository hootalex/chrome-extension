$(document).ready(function(){

	var url = window.location.hostname;
	var path = "https://hootalex.github.io/chrome-extension/audio/";
	var audio = "<audio src="+path+url+".mp3></audio>";



$("body").append(audio);
$(audio).attr('autoplay','autoplay');

	});
