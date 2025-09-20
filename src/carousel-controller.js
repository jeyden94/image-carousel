// createImageCarousel(domContainer, imageFolder)

export function createImageCarousel(carouselParent, imageArray) {
    
    document.documentElement.style.setProperty('--number-of-slides', imageArray.length);
    document.documentElement.style.setProperty('--additional-offset', `0px`);
    let currentSlideIndex = 0;

    function createDOMElements(carouselParent, imageArray) {
        
        const carouselDivFrame = document.createElement("div")        
        const carouselDivWide = document.createElement("div");
        const carouselNav = document.createElement("div")

        carouselDivFrame.classList.add("carousel-div-frame")
        carouselDivWide.classList.add("carousel-div-wide")
        carouselNav.classList.add("carousel-nav")

        console.log(carouselDivWide)
        console.log(carouselDivFrame)

        carouselDivFrame.appendChild(carouselDivWide)
        carouselParent.appendChild(carouselDivFrame)

        for (let i = -1; i < imageArray.length + 1; i++) {

            if (i === -1) {
                const slide = document.createElement("img");
                slide.src = imageArray[imageArray.length - 1];
                carouselDivWide.appendChild(slide)

                const slideButton = document.createElement("button")
                slideButton.classList.add("prev-slide-button")
                carouselNav.appendChild(slideButton)
                carouselDivFrame.appendChild(carouselNav)

                slideButton.addEventListener("click", () => previousSlide())

            } else if (i > -1 && i < imageArray.length) {
                const slide = document.createElement("img");
                slide.src = imageArray[i];
                carouselDivWide.appendChild(slide)

                const slideButton = document.createElement("button")
                slideButton.classList.add("slide-button")
                carouselNav.appendChild(slideButton)
                carouselDivFrame.appendChild(carouselNav)

                slideButton.addEventListener("click", () => jumpToSlide(i))

            } else {
                const slide = document.createElement("img");
                slide.src = imageArray[0];
                carouselDivWide.appendChild(slide)

                const slideButton = document.createElement("button")
                slideButton.classList.add("next-slide-button")
                carouselNav.appendChild(slideButton)
                carouselDivFrame.appendChild(carouselNav)

                slideButton.addEventListener("click", () => nextSlide())
            }
        }

    }

    createDOMElements(carouselParent, imageArray)

    function jumpToSlide(index) {
        currentSlideIndex = index;
        console.log(currentSlideIndex)
        const slideWidth = getComputedStyle(document.documentElement).getPropertyValue('--carousel-slide-width');
        const slideWidthNum = parseInt(slideWidth);
        const offset = index * slideWidthNum
        document.documentElement.style.setProperty('--additional-offset', `-${offset}px`);
    }

    function nextSlide() {
        let index = currentSlideIndex + 1;
        jumpToSlide(index)
    }
    // jumpToSlide(2)

    // CREATE / USE NEW FUNCTION -- use a function here that will 

        // create a grid that holds the slide nav buttons

        // create super wide div (that holds the indiviudal slides)
        // create a picture frame div (that will dictate which of the images in the slide can be seen)
        // attach the latter to the former as a child
        // attach the former to the dom

        // enumerate through the images folder and 

            // create an img div for each img 
            // attach each image that div via it's source
            // attach each img div as a child to the super wide div
            // the rest can likely handle w/ css
            // create a button 
                // append the button to the grid for slide nav buttons
                // use the jumpTo function that jumps to a specific slide, pass it the index
                // from the enumeration process (need to figure this one out, more tricky)

        // create arrows that make the slider move
            // attach these to the picture frame on the DOM
            // on click it activates the relevant slider motion function below


    // close DOM function

    // nextSlide() /
    // previousSlide() //
        // create slider motion
        // 2 function that moves images from right to left or left to right
        // these should reset the timner on the timer function
        // after a click, 5 seconds until the timer fuc

    // autoNextSlide() //
        // create timer function
        // this is the tricky one -- this somehow needs to trigger the move-right function
        // after 5 seconds
        // if timer == 0, execute nextSlide()

    let intervalId;

    function startTimer() {
        if (intervalId) {
            clearInterval(intervalId)
        }

        intervalId = setInterval(() => {
            console.log("hi")
            // nextSlide()
        }, 5000)
    }

    // do I need a check timer function?

    // resetTimer() //
    // reset the slider timer
        // helper function that resets the timer to zero

    // jumpTo(index) //
        // jumpTo a specific image in the carousal

// close main function
}