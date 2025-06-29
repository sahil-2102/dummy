// const {readFileSync, writeFileSync, read} = require('fs');
const {readFile, writeFile} = require('fs');
readFile('./content/first.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})









// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second); 
// writeFileSync('./content/third.txt', "Kino shigoto ni ikimashita ka?");
