document.getElementById('assistanceButton').addEventListener('click', function() {
    alert('Assistance requested! We will contact you shortly.');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const issue = document.getElementById('issue').value;

    // Add your code here to handle the form data, e.g., send it to a server or display it
    console.log('Form submitted:', { name, phone, issue });
    alert('Thank you, ' + name + '. We have received your request and will contact you shortly.');
});
function initMap() {
    // Create the map object
    const map = new google.maps.Map(document.getElementById('map-container'), {
      zoom: 12,
      center: { lat: -33.86882, lng: 151.20929 },
    });
  
    // Add a marker
    const marker = new google.maps.Marker({
      position: { lat: -33.86882, lng: 151.20929 },
      map: map,
    });
  }
  
  // Initialize the map when the page loads
  window.onload = initMap;
  