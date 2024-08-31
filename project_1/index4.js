const EventEmmiter = require('events');

const eventEmmiter = new EventEmmiter();

const subscriptionMessage = (channel) => {
    console.log(`Thanks for subscribing to ${channel}`);
}
//  ..... ....  ...  Q8 ... .... ......
eventEmmiter.addListener("subscribe",subscriptionMessage);
console.log("Before Event listener");

eventEmmiter.emit("subscribe","College Wallah");

// ..... .... ... Q9 ... .... .....
eventEmmiter.removeListener('subscribe',subscriptionMessage)
console.log("After remove listener");

eventEmmiter.emit("subscribe","College Wallah");


//     ..... .... ... Q10 ... .... ..... 
console.log(`The default maximum no. of event listeners are: ${eventEmmiter.getMaxListeners()}` );

eventEmmiter.setMaxListeners(5);

console.log(`The updated maximum no. of event listeners are: ${eventEmmiter.getMaxListeners()}` );
