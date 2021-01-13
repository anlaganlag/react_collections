// const foo = async () => {
//     for (let i = 5; i >= 0; i--) {
//       await new Promise((r) => setTimeout(r, 1000));
//       console.log(i)
//     }
//   }
// foo()

const log = console.log;
function f1(a) {
  return new Promise((res, rej) => {
    log(1 + a);
    if (a === "g") {
      res(4);
    }
  });
}

function f2(b) {
  return new Promise((res, rej) => {
    log(3);
    res("ex" + b);
  });
}

f1("g")
  .then((c) => {
    log(2);
    return f2(c);
  })
  .then((d) => log(d));
