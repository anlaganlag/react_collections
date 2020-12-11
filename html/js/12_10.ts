function messUpTheArray(arr: Array<string | number>): void {
    arr.push(3);
}

const strings: Array<string> = ['foo', 'bar'];
messUpTheArray(strings);

const s: string = strings[2];
console.log(s.toLowerCase()) // Uncaught TypeError: s.toLowerCase is no\
// t a function