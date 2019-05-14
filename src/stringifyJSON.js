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


var stringifyJSON = function(obj) {
  var result = '';
  if (obj === undefined) {
    return 'undefined';

  } else if (obj === null) {
    return 'null';
  }
    else if (typeof obj === 'boolean') {
      if (obj) {
        result +='true';
      } else {
        result += 'false';
        }

  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';

  } else if (typeof obj === 'number') {
    result += obj.toString();

  }
  // for arrays
  else if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i + 1 < obj.length) {
        result += ',';
      }
    }
    result += ']';
  // for objects
  } else if (obj && typeof obj === 'object') {
    result += '{';
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        result += '"' + key + '":';
        result += stringifyJSON(obj[key]) + ',';
      }
    }
    if (result.charAt(result.length - 1) === ',') {
      result = result.slice(0, result.length - 1);
    }
    result += '}';

  }

  return result;
};
stringifyJSON([8, 'hi'])





