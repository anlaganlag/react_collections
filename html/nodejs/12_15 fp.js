const os = () => 1000;
const now = () => new Date();
const clear = () => console.clear();
const log = (msg) => console.log(msg);

const compose = (...fns) => (arg) => fns.reduce((acc, f) => f(acc), arg);

const storeTime = (d) => ({
  hrs: d.getHours(),
  mins: d.getMinutes(),
  secs: d.getSeconds(),
});

const below12 = (t) => ({
  ...t,
  hrs: t.hrs > 12 ? t.hrs - 12 : t.hrs,
});

const ampmHandle = (t) => ({
  ...t,
  ampm: t.hrs >= 12 ? "下午" : "上午",
});

const dp = (t) => (tm) => t(tm);
const convert = (ct) => compose(ampmHandle, below12)(ct);


const fc = (f) => (t) =>
  f
    .replace("hh", t.hrs)
    .replace("mm", t.mins)
    .replace("ss", t.secs)
    .replace("tt", t.ampm);

const addZero = (k) => (ct) => ({
  ...ct,
  [k]: ct[k] < 10 ? "0" + ct[k] : ct[k],
});


const dd = (ct) =>
  compose(addZero("hrs"), addZero("mins"), addZero("secs"))(ct);

const init = () =>
  setInterval(
    compose(clear, now, storeTime, convert, dd, fc("hh:mm:ss tt"), dp(log), os)
  );

init();
