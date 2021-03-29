// nav bar
// window.addEventListener("scroll", () => {
// 	const navbar = document.querySelector(".nav-bar");
// 	navbar.classList.toggle("sticky", window.scrollY > 0);
// });


$(document).ready(function(){
	$(".toggle-btn").click(function () {
		$(".nav-bar-links").toggle("active");
	});

	$(window).scroll(function () {
		let pos = $(window).scrollTop();
		if (pos >= 10) {
			$(".nav-bar").addClass("sticky");
		} else {
			$(".nav-bar").removeClass("sticky");
		}
	});
});
 

// toggle button
// const toggleButton = document.getElementsByClassName("toggle-btn")[0];
// const link = document.getElementsByClassName("nav-bar-links")[0];

// toggleButton.addEventListener("click", () => {
// 	link.classList.toggle("active");
// });



// animation
gsap.to("#home p", {
	y: -80,
	duration: 1,
	scrollTrigger: {
		trigger: ".link",
		scrub: 1,
		start: "top 53%",
		end: "bottom 30%",
	},
});

gsap.from("#about .about-title", {
	y: 50,
	opacity: 0,
	duration: 1,
	stagger:1,
	scrollTrigger: {
		trigger: ".about-title",
		// scrub: 1,
		// markers: true,
		start: "top 70%",
		end: "top 40%",
	},
});
gsap.from(".technical", {
	x: "-80px",
	opacity: 0,
	duration: 1,
	scrollTrigger: {
		trigger: ".technical",
		// scrub: 1,
		start: "top 100%",
		end: "top 70%",
	},
});
gsap.from(".about-content", {
	y: "80px",
	opacity: 0,
	duration: 1,
	scrollTrigger: {
		trigger: ".about-content",
		// scrub: 1,
		start: "top 100%",
		end: "top 70%",
	},
});

gsap.from("#projects .about-title", {
	y: 50,
	opacity: 0,
	duration: 1,
	scrollTrigger: {
		trigger: "#projects",
		// scrub: 1,
		// markers: true,
		start: "top 70%",
		end: "top 40%",
	},
});
gsap.from("#contact .about-title", {
	y: 50,
	opacity: 0,
	duration: 1,
	scrollTrigger: {
		trigger: "#contact",
		// scrub: 1,
		// markers: true,
		start: "top 70%",
		end: "top 40%",
	},
});

gsap.from(".project", {
	y: 50,
	opacity: 0,
	stagger: 0.5,
	duration: 1,
	scrollTrigger: {
		trigger: ".project-image",
		start: "top 70%",
		end: "top 40%",
	},
});

gsap.from("#my-form input, textarea, #button", {
	y: 50,
	opacity: 0,
	stagger: 0.5,
	duration: 1,
	scrollTrigger: {
		trigger: "#my-form",
		start: "top 70%",
		end: "top 40%",
	},
});

// form
 window.addEventListener("DOMContentLoaded", function () {
		// get the form elements defined in your form HTML above

		var form = document.getElementById("my-form");
		var button = document.getElementById("button");
		var status = document.getElementById("status");

		// Success and Error functions for after the form is submitted

		function success() {
			form.reset();
			status.innerHTML = "Thanks!";
			status.style.display = "block";
		}

		function error() {
			status.innerHTML = "Oops! There was a problem.";
			status.style.display = "block";
		}

		// handle the form submission event

		form.addEventListener("submit", function (ev) {
			ev.preventDefault();
			var data = new FormData(form);
			ajax(form.method, form.action, data, success, error);
		});
 });

 // helper function for sending an AJAX request

 function ajax(method, url, data, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
 }
// footer
const year = new Date();
document.querySelector("#year").textContent = "copyright @ " + year.getFullYear() + " all rights reserved.";
