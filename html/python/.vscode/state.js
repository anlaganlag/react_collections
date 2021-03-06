let cnt = 0;

function add() {
  cnt++;
  play();
}

function play() {
  console.log(cnt);
}
setInterval(function () {
  add();
}, 1000);
