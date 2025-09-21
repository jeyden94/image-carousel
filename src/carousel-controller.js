import arrowIconPath from "./icons/arrow.png";

export function createImageCarousel(carouselParent, imageArray) {

    const startingSlideIndex = 0; // Set preferred starting image

    let currentSlideIndex = startingSlideIndex;
    let intervalId;

    document.documentElement.style.setProperty('--number-of-slides', imageArray.length);
    document.documentElement.style.setProperty('--additional-offset', `0px`);

    function startTimer() {
        if (intervalId) {
            clearInterval(intervalId)
        }

        intervalId = setInterval(() => {
            console.log("hi")
            nextSlide()
        }, 5000)
    }

    function createDOMElements(carouselParent, imageArray) {
        
        const carouselDivFrame = document.createElement("div")        
        const carouselDivWide = document.createElement("div");
        const carouselNav = document.createElement("div")
        const carouselArrows = document.createElement("div")

        carouselDivFrame.classList.add("carousel-div-frame")
        carouselDivWide.classList.add("carousel-div-wide")
        carouselNav.classList.add("carousel-nav")
        carouselArrows.classList.add("carousel-arrows")

        carouselDivFrame.appendChild(carouselDivWide)
        carouselParent.appendChild(carouselDivFrame)

        for (let i = -1; i < imageArray.length + 1; i++) {

            if (i === -1) {

                const slideWrapper = document.createElement("div")
                slideWrapper.classList.add("slide-wrapper")

                const slide = document.createElement("img");
                slide.src = imageArray[imageArray.length - 1];

                slideWrapper.appendChild(slide)
                carouselDivWide.appendChild(slideWrapper)

                const previousArrow = document.createElement("button")
                previousArrow.classList.add("prev-slide-button")
                
                const arrowIconLeft = document.createElement("img")
                arrowIconLeft.classList.add("arrow-icon-left")
                arrowIconLeft.src = arrowIconPath

                previousArrow.append(arrowIconLeft)
                carouselArrows.appendChild(previousArrow)
                carouselDivFrame.appendChild(carouselArrows)

                previousArrow.addEventListener("click", () => previousSlide())

            } else if (i > -1 && i < imageArray.length) {

                const slideWrapper = document.createElement("div")
                slideWrapper.classList.add("slide-wrapper")

                const slide = document.createElement("img");
                slide.src = imageArray[i];

                slideWrapper.appendChild(slide)
                carouselDivWide.appendChild(slideWrapper)

                const slideButton = document.createElement("button")
                slideButton.classList.add("slide-button", `slide-button-${i}`)
                carouselNav.appendChild(slideButton)
                carouselParent.appendChild(carouselNav)

                slideButton.addEventListener("click", () => jumpToSlide(i))

            } else {

                const slideWrapper = document.createElement("div")
                slideWrapper.classList.add("slide-wrapper")

                const slide = document.createElement("img");
                slide.src = imageArray[0];

                slideWrapper.appendChild(slide)
                carouselDivWide.appendChild(slideWrapper)

                const nextArrow = document.createElement("button")
                nextArrow.classList.add("next-slide-button")

                const arrowIconRight = document.createElement("img")
                arrowIconRight.classList.add("arrow-icon-right")
                arrowIconRight.src = arrowIconPath

                nextArrow.append(arrowIconRight)
                carouselArrows.appendChild(nextArrow)
                carouselDivFrame.appendChild(carouselArrows)

                nextArrow.addEventListener("click", () => nextSlide())
            }
        }

        setActiveSlideButton(startingSlideIndex)
    }

    function jumpToSlide(index) {
        unsetActiveSlideButton(currentSlideIndex)
        currentSlideIndex = index;
        console.log(currentSlideIndex)
        const slideWidth = getComputedStyle(document.documentElement).getPropertyValue('--carousel-slide-width');
        const slideWidthNum = parseInt(slideWidth);
        const offset = index * slideWidthNum
        document.documentElement.style.setProperty('--additional-offset', `-${offset}px`);
        startTimer()
        setActiveSlideButton(index)
    }

    function nextSlide() {
        let index = currentSlideIndex + 1;
        if (index === imageArray.length) {
            jumpToSlide(0)
        } else {
            jumpToSlide(index)
        }
    }

    function previousSlide() {
        let index = currentSlideIndex - 1;
        if (index === -1) {
            jumpToSlide(imageArray.length - 1)
        } else {
            jumpToSlide(index)
        }  
    }

    function unsetActiveSlideButton(index) {
        const activeSlideButton = document.querySelector(`.slide-button-${index}`)
        activeSlideButton.classList.remove('active');
    }

    function setActiveSlideButton(index) {
        const activeSlideButton = document.querySelector(`.slide-button-${index}`)
        activeSlideButton.classList.add('active');
    }

    startTimer()
    createDOMElements(carouselParent, imageArray)
}