
document.getElementById("quoteForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("quoteForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
});
