const os = require('os');

console.log(os.uptime());   // returns the uptime of the system
console.log(os.hostname()); // the hostname on which the os operates
console.log(os.freemem()); // returns available system memory in bytes as an integer
console.log(os.machine()); // returns the machine type 
console.log(os.release()); // returns the os as a string
console.log(os.type());    // type of OS
console.log(os.totalmem()); // total amount of memory in the system in bytes as an integer
console.log(os.version()); // returns karnel version
console.log(os.userInfo()); // returns the current effective user
