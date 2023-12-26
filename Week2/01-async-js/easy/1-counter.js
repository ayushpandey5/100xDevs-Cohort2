// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0

const interval = setInterval(() => {
    counter ++
    console.log(counter)

    if (counter >= 2) {
        clearInterval(interval); // This stops the interval
        console.log("Interval stopped.");
    }

},1000)
