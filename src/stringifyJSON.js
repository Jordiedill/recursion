// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//-----------------------------------------------
  // your code goes here

  //if undefined or function() return null

  // handle object input
    // ...


  // handle unstringafiable value input
    // ...

 // return stringifyJSON until we reach innermost value

 //if object put key in "" and wrap object in ''

 //if array wrap array in ''

 //if
 //----------------------------------------------


function arrFunc(obj) {
var resultArr = [];
for (var x = 0; x < obj.length; x++) {
  if(typeof(obj[x]) === 'string') {
   resultArr.push(`"${obj[x]}"`);
  }
  if(typeof(obj[x]) === 'number') {
   resultArr.push(obj[x]);
  }
  if(Array.isArray(obj[x]) && obj[x].length > 0) {
  return resultArr.concat(arrFunc(`[${obj[x]}]`));
  }
  if (Array.isArray(obj[x]) && obj[x].length === 0) {
  resultArr.push(`[${obj[x]}]`);
  }
}
return resultArr;
};


var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return `${obj}`
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (Array.isArray(obj) && obj.length === 0) {
  return `[${obj}]`
  }
  if (Array.isArray(obj) && obj.length > 0) {
    return `[${arrFunc(obj)}]`;
  }
  return obj;
};


// var ourTest = [8, 9, 10]
// console.log(stringifyJSON(ourTest));

