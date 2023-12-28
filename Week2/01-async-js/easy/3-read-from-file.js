// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.

 const fs = require('fs');

function readFileCallback(filepath){
    fs.readFile(filepath,'utf8',function (err, data) {
        if (err) {
            console.error(`Error ${err}`)
            return
        }
        console.log("File content: ")
        console.log(data)
    })

    console.log("outside readFile async function")
}

 const filePath = './file.txt';
readFileCallback(filePath);


function readFilePromises(filePath){
return new Promise(function(reject,resolve){
    fs.readFile('file.txt', 'utf-8', function(err, data) {
        if(err){
            reject(new Error('Something went wrong'));
        }
        console.log("Promise resolved")
        resolve(data)
        
    }) 
})
}

function onDone(data){
    console.log(data)
}

readFilePromises(filePath).then(onDone).catch(err => {console.error(err)})