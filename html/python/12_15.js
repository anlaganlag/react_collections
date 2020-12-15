function logClockTime() {
  let time = getClockTime();

  console.clear();
  console.log(time);
}

function getClockTime() {
  const date = new Date();

  const time = {
    hrs: +date.getHours(),
    mins: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };
  if (time.hrs <= 12) {
    time.ampm = "上午";
  } else if (time > 12) {
    time.ampm = "下午";
    time.hrs -= 12;
  }

  if (time.mins < 10) {
    time.mins = "0" + time.mins;
  }

  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }

  return `${time.hrs}:${time.mins}:${time.seconds}  ${time.ampm} `;
}

setInterval(logClockTime, 1000);
