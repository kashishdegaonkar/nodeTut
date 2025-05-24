const fs = require("fs");

// fs.writeFile("message.txt" , "hello from node!", (err) => {
//     if (err) throw err;
//     console.log("the file has been saved!");

// });

fs.readFile('./message.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString("utf-8"));
  }); 