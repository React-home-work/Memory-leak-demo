//以自己为返回值的函数称为自复制函数
// (function selfApplicative(funArg) {
//     if (funArg && funArg === selfApplicative ) {
//         alert('self-applicative');
//         return;
//     }

//     selfApplicative(selfApplicative);
// })();

// var x = 10;
// function foo() {
//     alert(x);
// }

// (function (funArg) {
//     var x = 20;
//     funArg();
// })(foo);  // 10


// function testFoo(testArg) {
//     var x = 20;
//     testArg();
// };

// testFoo(foo); // 10
// console.log('window scope', window);


// var x = 10;

// function foo() {
//     var y = 20;

//     function bar()  {
//         var z = 30;
//         alert(x + y +z);
//     }

//     bar();
// }

// foo(); // 60
// console.log('window scope', window);

var firstClosure;
var secondClosure;

function foo() {
    var x = 1;
    firstClosure = function () { return ++x; };
    secondClosure = function () { return --x; };

    x = 2;

    alert(firstClosure()); //3
}

foo();

alert(firstClosure()); //4
alert(secondClosure()); //3
console.log('window scope', window);

// 闭包本身不是问题，闭包的词法环境被挂到window无法回收才是问题

// 理论上所有函数都是闭包，除了使用函数构造器生成的函数
// var plus=new Function("a","b","return a+b");  