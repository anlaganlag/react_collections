// Convert time to hours and minutes
export const calcTime = (time) => {

  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}時 ${mins}分`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "RMB",
    //小数点位数为0
    minimumFractionDigits: 0,
  });
  return formatter.format(money*7);
};

export const getSessionStateData = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionStorage && JSON.parse(sessionState);
};

export const calPopularity = (val,benchMark=1000) => {
  const rated = (val/benchMark*10).toFixed(3)
  return rated
};

