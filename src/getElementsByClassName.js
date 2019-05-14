// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
var body = document.body;
var result = []
var hasClass = function(body) {
    if(body.classList && body.classList.contains(className)) {
      result.push(body);
    }
    if(body.hasChildNodes()) {
      for(var x = 0; x < body.childNodes.length; x++) {
        hasClass(body.childNodes[x]);
      }
    }
}
  hasClass(body);
  return result;
};