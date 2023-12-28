// Write to a file
//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

function writeFile(data){
    fs.writeFile('filewrite.txt', data, (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(`File created`)
    })
}

str = "Hello, I'm a new file"

// writeFile(str)

function writeFilePromise(data){
    return new Promise(function(reject, resolve) {
        fs.writeFile("promiseFile.txt", data, (err) => {
            if (err){
                reject(err)
            }
            resolve(data)
        })
    })
}

writeFilePromise(str).then(data => {console.log("File created using Promise")}).catch(err => {console.error(err)})