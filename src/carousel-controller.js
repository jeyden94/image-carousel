export function createImageCarousel(carouselParent, imageArray) {

    let intervalId;
    let activeSlideButton;
    const startingSlideIndex = 0; // Set preferred starting image

    function startTimer() {
        if (intervalId) {
            clearInterval(intervalId)
        }

        intervalId = setInterval(() => {
            console.log("hi")
            nextSlide()
        }, 5000)
    }
    startTimer()

    document.documentElement.style.setProperty('--number-of-slides', imageArray.length);
    document.documentElement.style.setProperty('--additional-offset', `0px`);
    let currentSlideIndex = 0;

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
                const slide = document.createElement("img");
                slide.src = imageArray[imageArray.length - 1];
                carouselDivWide.appendChild(slide)

                const previousArrow = document.createElement("button")
                previousArrow.classList.add("prev-slide-button")
                carouselArrows.appendChild(previousArrow)
                carouselDivFrame.appendChild(carouselArrows)

                previousArrow.addEventListener("click", () => previousSlide())

            } else if (i > -1 && i < imageArray.length) {

                const slide = document.createElement("img");
                slide.src = imageArray[i];
                carouselDivWide.appendChild(slide)

                const slideButton = document.createElement("button")
                slideButton.classList.add("slide-button", `slide-button-${i}`)
                carouselNav.appendChild(slideButton)
                carouselParent.appendChild(carouselNav)

                slideButton.addEventListener("click", () => jumpToSlide(i))

            } else {
                const slide = document.createElement("img");
                slide.src = imageArray[0];
                carouselDivWide.appendChild(slide)

                const nextArrow = document.createElement("button")
                nextArrow.classList.add("next-slide-button")
                carouselArrows.appendChild(nextArrow)
                carouselDivFrame.appendChild(carouselArrows)

                nextArrow.addEventListener("click", () => nextSlide())
            }
        }

        const activeSlideButton = document.querySelector(`.slide-button-${startingSlideIndex}`)
        setActiveSlideButton(startingSlideIndex)
    }

    createDOMElements(carouselParent, imageArray)

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
        const newActiveSlideButton = document.querySelector(`.slide-button-${index}`)
        newActiveSlideButton.classList.add('active');
    }

}