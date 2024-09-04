"use strict";

function redirectToWatch() {
	if (document.location.pathname.includes("/shorts/")) {
		const slug = document.location.pathname.replace("/shorts/", "").replace(/\/$/, "");
		document.location.href = "/watch?v=" + slug;
	}
}

document.addEventListener("yt-navigate-finish", redirectToWatch)

if (document.body) {
	redirectToWatch()
} else {
	document.addEventListener("DOMContentLoaded", redirectToWatch)
}
