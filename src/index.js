import "./styles.css";
import { createImageCarousel } from "./carousel-controller"
import imageOnePath from "./images/image-1.jpg";
import imageTwoPath from "./images/image-2.jpg";
import imageThreePath from "./images/image-3.jpg";
import imageFourPath from "./images/image-4.jpg";
import imageFivePath from "./images/image-5.jpg";

// Assign parent div for the carousel
const carouselParent = document.querySelector(".test-div")

// Create and array with variables that link to desired image path
const imageArray = [
    imageOnePath,
    imageTwoPath,
    imageThreePath,
    imageFourPath,
    imageFivePath,
]

createImageCarousel(carouselParent, imageArray)