(function() {
    var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing)
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log(someMessage);
    }
  };
};
setInterval(replaceThing, 1000);
})()



// Window.list = [];

// function addContainer() {
//     var testElement = document.createElement('div');
//     testElement.innerHTML = "test";
//     Window.list.push(testElement);
//     console.log('add once');
// }
