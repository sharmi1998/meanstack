var fruit=["banana","apple","grapes"]
// console.log(typeof(fruit))
// console.log(Array.isArray(fruit))
fruit.forEach(myFunction)
function myFunction(item,index){
    ind=index+1
    console.log(item+":found at-"+ind);

}