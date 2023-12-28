// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
function callbackFileTrim(){
    const fs = require('fs')
    const filepath = "./test.txt"
    function getFile(filepath, callback){
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err){
                throw err;
                return
            }
            callback(data)
        })
    }
    function cleanFile(str) {
        trimmedStr = str.replace(/\s+/g, ' ');
        return console.log(trimmedStr)
    }
    getFile(filepath, cleanFile)
}
