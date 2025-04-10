

// Get job from URL
const urlParams = new URLSearchParams(window.location.search);
const job = urlParams.get('job');
document.getElementById('jobTitle').textContent = job;
document.getElementById('job').value = job;

document.getElementById("application-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Create JSON structure
    const formData = {
        job: document.getElementById("job").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value
    };

    // Display thank you message
    document.getElementById("application-form").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    // Print to console (simulate saving to JSON file)
    console.log("📦 Form Submitted:", JSON.stringify(formData, null, 2));

    // Optional: send to server endpoint with fetch
    /*
    fetch('/save-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(response => {
      // handle server response
    });
    */
});


