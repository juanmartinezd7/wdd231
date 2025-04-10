
document.getElementById("application-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("application-form").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
});
