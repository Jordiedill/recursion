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

// var resultArr = [];

// function arrFunc(obj) {
// for (var x = 0; x < obj.length; x++) {
//   if(typeof(obj[x]) === 'string') {
//    obj[x] = `"${obj[x]}"`
//    continue
//   }
//   return resultArr.push(arrFunc(obj));
//   }
//   return obj;
// }


// var stringifyJSON = function(obj) {
//   if (typeof obj === 'boolean' || typeof obj === 'number') {
//     return `${obj}`
//   }
//   if (obj === null) {
//     return 'null';
//   }
//   if (typeof obj === 'string') {
//     return `"${obj}"`;
//   }
//   if (Array.isArray(obj) && obj.length === 0) {
//   return `[${obj}]`
//   }
//   if (Array.isArray(obj) && obj.length > 0) {
//     arrFunc(obj);
//     return `"${resultArr}"`
//   }
//   return obj;
// };
// var test = [8]


// console.log(stringifyJSON(test));
