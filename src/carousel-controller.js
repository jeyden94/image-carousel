// createImageCarousel(domContainer, imageFolder)
// let timer = 5 seconds

// Start function createImageCarousel taking 2 arguments, the dom element and the image folder 

    // createDOMElements(domContainer, imageFolder)
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

    // do I need a check timer function?

    // resetTimer() //
    // reset the slider timer
        // helper function that resets the timer to zero

    // jumpTo(index) //
        // jumpTo a specific image in the carousal

// close main function