// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function usingSetInterval(){
    setInterval(() => {
        let currentDate = new Date();
        let hour = currentDate.getHours();
        let minute = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let AMPM = hour >= 12 ? 'PM' : 'AM';
    
    console.log(`${hour%12}:${minute}:${seconds} ${AMPM}`);
    },1000)
}

function usingSetTimeout(){
    function clock(){
        let currentDate = new Date();
            let hour = currentDate.getHours();
            let minute = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();
            let AMPM = hour >= 12 ? 'PM' : 'AM';
            console.log(`${hour%12}:${minute}:${seconds} ${AMPM}`);
        setTimeout(clock,1000)
    }
    clock();
}

// usingSetTimeout();
// usingSetInterval();
