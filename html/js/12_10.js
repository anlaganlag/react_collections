function messUpTheArray(arr) {
    arr.push(3);
}
var strings = ['foo', 'bar'];
messUpTheArray(strings);
var s = strings[2];
console.log(strings) // Uncaught TypeError: s.toLowerCase is no\
// t a function
