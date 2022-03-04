// file is built into Node.js
const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line of code to demonstrate asynchronous function');

// writing files
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file was written');
});

// writing a file that doesn't exist will create a new file
fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    console.log('file was written again');
});

// directories
if(!fs.existsSync('./assets')) { // do the following only if this folder doesn't already exist
    fs.mkdir('./assets', (err)=> {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => { // do the following if the folder does exist
        if(err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    });
} else {
    fs.writeFile('./docs/deleteme.txt', '', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file created');
    });
}