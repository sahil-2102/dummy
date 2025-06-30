const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('nodeRunner', () => { // register a listener function that executes when an event signal is recieved
    console.log("Hello node!");
});

eventEmitter.emit('nodeRunner'); // this would trigger the listener function when the associated event occurs