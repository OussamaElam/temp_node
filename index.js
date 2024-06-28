// // -> Global - in NodeJS there is no window 

// // The console, setInterval, setTimeout ... are also a global variables
// console.log(__dirname); // Path to the current directory
// console.log(__filename); //Path to the current file

// // -> Modules : Encapsulated code (only share the minimum)

// //Every file is a module by default, CommonJS
// console.log(module);

// const names = require("./module2");
// const sayHi = require("./module1");
// console.log(names);
// sayHi(names.oussama);

// // Requiring a module also invoke its functions 
// // Built in modules examples : os path fs http


// // -> os
// const os = require("os");
// console.log(os.userInfo()); // info about current user
// console.log(os.uptime());

// const currentOS = {
//     name : os.type(),
//     release : os.release(),
//     totalMemory : os.totalmem(),
//     freeMem : os.freemem()
// }
// console.log(currentOS);

// // -> path
// const path = require("path");
// console.log(path.sep);

// const filePath = path.join("container\\", "subfolder", "test.txt");
// console.log(filePath);
// console.log(path.basename(filePath));
// console.log(path.resolve(__dirname, filePath));

// // -> fs
    // // -> Sync
    // const {readFileSync, writeFileSync} = require("fs");
    // const first = readFileSync("./container/first.txt", "utf8");
    // const second = readFileSync("./container/second.txt", "utf8");
    // console.log(first, second);

    // writeFileSync("./container/subfolder/results.txt", `Hello it's the results file :\n
    //                                                     the results are ${first}, ${second}`, {flag : 'a'}); 
    // // flag is to append the new text in the file without removing what already existed in it

    // // -> Async
    // const {readFile, writeFile} = require("fs");
    // readFile("./container/first.txt", "utf8", (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log(result);
    //     const first = result;
    //     readFile("./container/second.txt", "utf8", (err, result) => {
    //         if (err) {
    //             console.log(err);
    //             return
    //         }
    //         console.log(result);
    //         const second = result;
    //         writeFile("./container/subfolder/results.txt", `Hello it's the results file :\n
    //                         the results are ${first}, ${second}`, {flag : 'a'}, (err, result) => {
    //                             if (err) {
    //                                 console.log(err);
    //                                 return;
    //                             }
    //                             console.log(result);
    //                         });
    //     });
    // }); // the third argument is a callback function

// // -> http !important
// const http = require("http");
// const server = http.createServer((req, res) => {
//     if (req.url === '/') 
//         res.end("Here is our home page");
//     else if (req.url === "/about")
//         res.end("Here is our short history");
//     else {
//         res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//         `);

//     }
// });
// server.listen(5000);

// -> npm node package manager
// installed with node npm -v
// local dependency : only for this particular project "npm i <packageName>"
// global dependency : for any project "npm install -g <packageName>"
