//Image array named images
//stores the file paths to three different images

const images = [
    'images/hero-image.webp',
    'images/hero-image-2.webp',  //These are the images that will rotate in the hero section
    'images/hero-image-3.webp'
];

//currentIndex keeps track of the current image being shown
//It starts at 0, meaning the first image in the array
let currentIndex = 0;
const imageElement = document.getElementById('rotating-image'); //This line grabs the <img> element from the HTML with the ID of "rotating-image"
                                                                //It will be the image that's dynamically changed

//setInterval runs a function every 4000 milliseconds (4 seconds).
                                                              
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // increases the index by 1  The % ensures it wraps around to 0 after the last image
    imageElement.src = images[currentIndex];           // updates the src of the image element to the new image.
}, 4000); // Change image every 4 seconds

