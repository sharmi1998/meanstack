var EventEmitter=require('events');
var emitter=new EventEmitter();
emitter.on('doorOpen',(name)=>{
    console.log(name+" is waiting outside");
})
emitter.emit('doorOpen','anjali');