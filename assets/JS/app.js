
$(document).ready(function(){
	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 20) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}

		// scroll-up button show/hide script
		if (this.scrollY > 500) {
			$(".scroll-up-btn").addClass("show");
		} else {
			$(".scroll-up-btn").removeClass("show");
		}
	});

	// slide-up script
	$(".scroll-up-btn").click(function () {
		$("html").animate({ scrollTop: 0 });
		// removing smooth scroll on slide-up button click
		$("html").css("scrollBehavior", "auto");
	});

	$(".navbar .menu li a").click(function () {
		// applying again smooth scroll on menu items click
		$("html").css("scrollBehavior", "smooth");
	});

	// toggle menu/navbar script
	$(".menu-btn").click(function () {
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});

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

 VanillaTilt.init(document.querySelectorAll(".tilt"), {
		max: 25,
 });

//  aos animation
 AOS.init({
		offset: 400, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
 });
// footer
const year = new Date();
document.querySelector("#year").innerHTML = "Created by <span>JB.</span> | &copy " + year.getFullYear() + " All rights reserved.";

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

	gsap.from("#about .heading", {
		y: 50,
		opacity: 0,
		duration: 1,
		stagger: 1,
		scrollTrigger: {
			trigger: ".heading",
			scrub: 1,
			// markers: true,
			start: "top 70%",
			end: "top 40%",
		},
	});
	gsap.from("#projects .heading", {
		y: 50,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: "#projects",
			scrub: 1,
			// markers: true,
			start: "top 70%",
			end: "top 40%",
		},
	});
	gsap.from("#contact .title", {
		y: 50,
		opacity: 0,
		duration: 1,
		stagger: 1,
		scrollTrigger: {
			trigger: "#contact",
			scrub: 1,
			// markers: true,
			start: "top 70%",
			end: "top 40%",
		},
	});

	gsap.from(".right", {
		x: "80px",
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".right",
			// scrub: 1,
			start: "top 100%",
			end: "top 70%",
		},
	});
	gsap.from(".about-content", {
		x: "-80px",
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: ".about-content",
			// scrub: 1,
			start: "top 100%",
			end: "top 70%",
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