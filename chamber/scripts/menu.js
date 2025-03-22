//
const hamButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

//const links = document.querySelectorAll(".menu a");
//const currentPage = window.location.pathname;

//links.forEach(link => {
//if (link.getAttribute("href") === currentPage) {
//link.classList.add("active");
//}
//});