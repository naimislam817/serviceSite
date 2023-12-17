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

    // Here you would normally handle the form submission, e.g., using AJAX.
    console.log('User Type:', userType);
    console.log('Name:', name);
    console.log('Email:', email);
    // Do not log passwords in production
    
    // Simulate successful registration
    alert('Registration successful!');
    
    // Reset the form
    document.getElementById('registrationForm').reset();
    return true;
});
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

    // Here you would normally handle the form submission, e.g., using AJAX.
    // For the purpose of this example, we'll simply redirect the user based on the userType selected.

    switch (userType) {
        case 'driver':
            window.location.href = 'driverdetail.html'; // Replace with your actual driver dashboard URL
            break;
        case 'customer':
            window.location.href = 'index.html'; // Replace with your actual customer dashboard URL
            break;
        case 'owner':
            window.location.href = 'mechanic-dashboard.html'; // Replace with your actual workshop owner dashboard URL
            break;
        case 'admin':
            window.location.href = 'admin-dashboard.html'; // Replace with your actual admin dashboard URL
            break;
        default:
            alert('Please select a user type.');
    }
    
    // For security reasons, do NOT log passwords or sensitive information in production.
    
    // Reset the form (optional, you may remove this if redirection is taking place)
    // document.getElementById('registrationForm').reset();
});
