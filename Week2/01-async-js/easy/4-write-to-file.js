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

str = "Hello \t, I'm a new file \n asdasdasd \n asdasdada"

writeFile(str)