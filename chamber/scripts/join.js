document.getElementById('membershipForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Optionally, clear form fields
    this.reset();

    // Show confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
});