// Mobile menu toggle functionality
//document.addEventListener("DOMContentLoaded", function () {
//const menuToggle = document.getElementById("menu-toggle");
//const menu = document.getElementById("menu");

//if (menuToggle && menu) {
//menuToggle.addEventListener("click", function () {
//menu.classList.toggle("show");
//});
//}
//});

const hamButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});