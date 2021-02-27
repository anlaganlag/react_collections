const a = new Date("2021-02-23");
const b = new Date("2021-05-23");
const dayMS = 86400000;
// console.log(a.now()+10000*dayMS);
// for (i in a){
//     console.log(i);
// }
console.log(a);


console.log(new Date(a.valueOf()+10000*dayMS));

