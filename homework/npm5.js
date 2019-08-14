const _=require('lodash');
var myarray=_.chunk(['a', 'b', 'c', 'd'], 2);
console.log(myarray);
var my=_.compact([0, 1, false, 2, '', 3]);
console.log(my);
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(array);
console.log(other);
var w=_.difference([2, 1], [2, 3]);
console.log(w);
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
var s=_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
console.log(s);