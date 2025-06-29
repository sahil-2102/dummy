const path = require('path');

// console.log(path);
const filePath = path.join('/content', 'subfolder', 'text.txt'); // joins the strings and creates a path as a string
console.log(filePath); 
console.log(path.basename(filePath)); // returns the base file in the path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);


