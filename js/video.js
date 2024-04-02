var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log ("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.play();
	console.log("Played video");
	console.log("The volume value is at " + video.volume)
}
);

document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.pause();
	console.log("Paused video");
}
);

document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate *= .9;
	console.log("Slowed down video");
	console.log("Video speed is at " + video.playbackRate)
}
);

document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate *= 1.1;
	console.log("Sped up video");
	console.log("Video speed is at " + video.playbackRate)
}
);

document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");

	if (video.ended) {
		video.currentTime = 0;
		console.log("Skipped ahead");
		console.log("Video's current time is " + video.currentTime)
	}
	else {
		video.currentTime += 10;
		console.log("Skipped ahead");
		console.log("Video's current time is " + video.currentTime)
	}
}
);

document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	
	if (video.muted) {
		video.muted = false;
		console.log("Video is unmuted");
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true;
		console.log("Video is muted");
		document.querySelector("#mute").innerHTML = "Unmute"
	}
}
);

document.querySelector("#slider").addEventListener("change", function() {
	video = document.querySelector("#player1");
	volume = document.querySelector("#slider").value;
	video.volume = volume/100;
	console.log("The volume value is at " + video.volume)
}
);

document.querySelector("#vintage").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.classList.add("oldSchool")
}
);

document.querySelector("#orig").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.classList.remove("oldSchool")
}
);
