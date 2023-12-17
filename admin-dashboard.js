// Simulating a logout process
document.getElementById('logout').addEventListener('click', function() {
    // Here you would typically invalidate the user's session on the server.
    alert('You have been logged out.');
    // Redirect to the login page
    window.location.href = 'index.html'; // Replace with the actual login page URL
});

// Function to generate a bar chart for booking services
function generateBookingChart() {
    const ctx = document.getElementById('booking-chart').getContext('2d');
    const bookingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Service A', 'Service B', 'Service C'],
            datasets: [{
                label: 'Number of Bookings',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the function to generate the chart when the script loads
generateBookingChart();
