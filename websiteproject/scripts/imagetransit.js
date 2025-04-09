
const images = [
    'images/ext-image.webp',
    'images/ext-image-2.webp',
    'images/ext-image-3.webp'
];

let currentIndex = 0;
const imageElement = document.getElementById('rotating-image');

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}, 4000); // Change image every 4 seconds

