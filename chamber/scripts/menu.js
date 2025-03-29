//
const hamButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

