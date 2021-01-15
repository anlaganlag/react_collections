const log = console.log;

const f1 = (a) =>
  new Promise((res) => {
    if (a === "g") {
      res("3");
    }
  });

const f2 = (b) =>
  new Promise((res) => {
    res("ex" + b);
  });


  f1("g")
    .then(x=>f2(x))
    .then(y=>log(y))