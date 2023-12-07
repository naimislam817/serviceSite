document.getElementById('bookingForm').addEventListener('submit', function(event){
    event.preventDefault();

    // Example: Fetch API to send form data to a server
    fetch('path_to_your_server_endpoint', {
        method: 'POST',
        headers: {
            '
