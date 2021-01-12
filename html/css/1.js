(function IIFE(foo) {
  foo(window);
})

(function foo(global) {
  var a = 3;
  console.log(a); // 3
  console.log(global.a); // 2
})


