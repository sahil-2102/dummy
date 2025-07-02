// console.log(__dirname); // it returns the absolute or full path from root directory to the directory this this file is 
//                         // is running from
// console.log(process.cwd()); // absolute path form where the node js process started
// console.log(__filename); // returns same path like __dirname but includes the current file name too
const student = {
    name: "Sahil",
    func: function(){
        console.log(this);
        console.log(typeof(this))
    }
}
student.func();
console.log(typeof(this))