import "./styles.css";
import { createImageCarousel } from "./carousel-controller"
import imageOnePath from "./images/image-1.jpg";
import imageTwoPath from "./images/image-2.jpg";
import imageThreePath from "./images/image-3.jpg";
import imageFourPath from "./images/image-4.jpg";
import imageFivePath from "./images/image-5.jpg";

const carouselParent = document.querySelector(".test-div")

const imageArray = [
    imageOnePath,
    imageTwoPath,
    imageThreePath,
    imageFourPath,
    imageFivePath,
]

// const slideOne = document.createElement("img");
// slideOne.src = imageOnePath;

// carouselParent.appendChild(slideOne)

createImageCarousel(carouselParent, imageArray)