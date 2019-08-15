var EventEmitter=require('events');
var emitter=new EventEmitter();
emitter.on('doorOpen',(name)=>{
    console.log(name+" is waiting outside");
});
emitter.on('doorOpen',(name)=>{
    console.log("dear"+name+ ",please wait outside for a moment");
});
emitter.emit('doorOpen','anjali');
emitter.emit('doorOpen','raju');