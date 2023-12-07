// script.js

function validateForm() {
    // Simple form validation example
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (!fullName || !email || !phone) {
        alert('Please fill out all required fields.');
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');

    // Initial scroll position
    var scrollPosition = window.scrollY;

    // Update header color on scroll
    window.addEventListener('scroll', function () {
        // Current scroll position
        var currentScroll = window.scrollY;

        // Check if the user is scrolling down
        if (currentScroll > scrollPosition) {
            // Scrolling down, change header background color
            header.style.backgroundColor = '#2980b9'; // Change to the color you prefer
        } else {
            // Scrolling up, revert to the original color
            header.style.backgroundColor = '#3498db'; // Original color
        }

        // Update scroll position
        scrollPosition = currentScroll;
    });
});
