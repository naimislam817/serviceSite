document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userType = document.getElementById('userType').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate the passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Redirect to the appropriate dashboard based on user type
    var dashboardUrl;
    switch (userType) {
        case 'driver':
            dashboardUrl = 'driver-dashboard.html'; // Replace with your actual driver dashboard URL
            break;
        case 'customer':
            dashboardUrl = 'customer-dashboard.html'; // Replace with your actual customer dashboard URL
            break;
        case 'owner':
            dashboardUrl = 'workshop-owner-dashboard.html'; // Replace with your actual workshop owner dashboard URL
            break;
        case 'admin':
            dashboardUrl = 'admin-dashboard.html'; // Replace with your actual admin dashboard URL
            break;
        default:
            alert('Please select a user type.');
            return false; // Stop the form submission if no user type is selected
    }

    // Assuming the user registration process is successful
    alert('Registration successful! Redirecting to your dashboard...');
    window.location.href = dashboardUrl; // Redirect to the selected dashboard

    // Note: In a real application, you should not handle redirections like this.
    // After registration, the user should typically verify their email and then log in to be redirected.
    // This is just for demonstration purposes.
});
