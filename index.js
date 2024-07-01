const fs = require('fs');

// const data = fs.readFileSync('test.txt');

// console.log(`Content of test.txt: \n${data}`);


// writing to a file
// fs.writeFile('test.txt','Hello World!', 'utf-8',(err) =>{
//     console.log('Data successfully written to file');
// })

// appending to a file
// fs.appendFile('test.txt',"class is going on",'utf-8',(err) =>{
//     console.log('Data successfully appended to file');
// })


// creating a directory
// fs.mkdir('dir1', (err) =>{
//     console.log('Directory created');
// })

// deleting a directory
// fs.rmdir('dir1', {recursive: true}, (err) =>{
//     if(err){
//         console.error(`Error deleting directory: ${err}`);
//     }
//     else {
//         console.log('Directory deleted');
//     }
// });

// renaming a file
// fs.rename('test2.txt','test.txt', (err) => {
//     console.log('File renamed');
// })

// S3 - Simple Storage Service - AWS

// path of a file
const path = require('path');

const p = '/home/sandip/Desktop/WebDev/js/test.txt';

const dirname = path.dirname(p);
const extension = path.extname(p);
console.log('Directory name:', dirname);
console.log('Extension:', extension);


// copy file from one location to another

// const source = 'test.txt';
// const destination = 'dir1/test.txt';

// fs.copyFile(source, destination, (err) => {
//     if (err) {
//         console.error(`Error copying file: ${err}`);
//     }
//     else {
//         console.log('File copied successfully');
//     }
// });
//
// fs.unlink('test.txt', (err) => {
//     if (err) {
//         console.error(`Error deleting file: ${err}`);
//     } else {
//         console.log('File deleted successfully');
//     }
// });

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/login') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello Login!</h1>');
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
})

const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})


