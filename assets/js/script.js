(function ($) {
	"use strict";

	// Theme color control js
	$(document).ready(function () {
		const isDarkMode = localStorage.getItem('darkMode') === 'true';
		$('body').toggleClass('dark-theme', isDarkMode);

		$('#page-content').fadeIn(0);

		$('.theme-control-btn').on("click", function () {
			$('body').toggleClass('dark-theme');

			const isDark = $('body').hasClass('dark-theme');
			localStorage.setItem('darkMode', isDark);
		});
	});

	// new addings
	document.addEventListener('DOMContentLoaded', function () {
		const themeToggleBtn = document.getElementById('theme-toggle');
		const body = document.body;
	  
		// Check for saved theme in localStorage
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
		  body.setAttribute('data-theme', savedTheme);
		} else {
		  body.setAttribute('data-theme', 'dark'); // Default to dark mode
		}
	  
		// Toggle theme on button click
		themeToggleBtn.addEventListener('click', function () {
		  const currentTheme = body.getAttribute('data-theme');
		  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		  body.setAttribute('data-theme', newTheme);
		  localStorage.setItem('theme', newTheme); // Save theme to localStorage
		});
	  });


	// Mobile menu control js
	$(".mobile-menu-control-bar").on("click", function () {
		$(".mobile-menu-overlay").addClass("show");
		$(".navbar-main").addClass("show");
	})
	$(".mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay").removeClass("show");
		$(".navbar-main").removeClass("show");
	})

	document.getElementById("year").textContent = new Date().getFullYear();

	// Parallax scroll effect js
	document.querySelectorAll(".move-with-cursor").forEach(a => {
		document.addEventListener("mousemove", function (e) {
			var t = e.clientX,
				e = e.clientY;
			a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", a.style.transform = `translate(${.01 * t}px, ${.01 * e}px) rotate(${.01 * (t + e)}deg)`
		})
	}),

		// Email copy button js
		new ClipboardJS('.btn-copy');

	// Email copy button tooltip js
	$(document).ready(function () {
		$(".btn-copy").on("click", function () {
			$(this).addClass("active");

			setTimeout(() => {
				$(this).removeClass("active");
			}, 1000);
		});
	});

	// Magnific popup js
	$(".parent-container").magnificPopup({
		delegate: ".gallery-popup",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	// Client feedback slider js
	$(".client-feedback-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

	// Article publications slider js
	$(".article-publications-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
  
		// Collect form data
		const serviceID = 'service_om6crcq'; 
		const templateID = 'template_4siced3';
		const notification = document.getElementById('notification');
  
		emailjs.sendForm(serviceID, templateID, this)
		  .then(() => {
			showNotification('Message sent successfully!', 'success');
			document.getElementById('contact-form').reset(); // Reset form
		  }, (err) => {
			showNotification('Failed to send message. Please try again.', 'error');
		  });
	  });
  
	  // Function to show notification
	  function showNotification(message, type) {
		const notification = document.getElementById('notification');
		notification.textContent = message;
  
		if (type === 'error') {
		  notification.classList.add('error');
		} else {
		  notification.classList.remove('error');
		}
  
		notification.classList.add('show');
  
		// Hide notification after 3 seconds
		setTimeout(() => {
		  notification.classList.remove('show');
		}, 3000);
	  }


})(jQuery);
