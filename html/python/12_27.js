var a = 10;
function test() {
  a = 5;
  console.log(a);
  console.log(this.a);
  var a;
  console.log(this.a);
  console.log(a);
}

test()
console.log("----------------------------")
new test()