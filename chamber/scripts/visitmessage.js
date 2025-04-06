document.addEventListener("DOMContentLoaded", () => {
    const messageElement = document.getElementById("visit-message");

    // Get the current time
    const now = Date.now();

    // Check if there's a stored last visit
    const lastVisit = localStorage.getItem("lastVisit");

    let message = "";

    if (!lastVisit) {
        // No previous visit found
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const millisecondsBetweenVisits = now - Number(lastVisit);
        const daysBetweenVisits = Math.floor(millisecondsBetweenVisits / (1000 * 60 * 60 * 24));

        if (daysBetweenVisits < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysBetweenVisits === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysBetweenVisits} days ago.`;
        }
    }

    // Display the message
    messageElement.textContent = message;

    // Store the current time as last visit for future use
    localStorage.setItem("lastVisit", now);
});
