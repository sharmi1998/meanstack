var EventEmitter=require('events');
var emitter=new EventEmitter();
emitter.on('doorOpen',()=>{
    console.log("hello world");
})
emitter.emit('doorOpen');