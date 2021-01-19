const arr = [];
let n = 0;

const randomFrom2To32 = () => Math.floor(Math.random() * 31) + 2;

const getArr = () => {
  if (arr.length === 2) {
    console.log("arr", arr);
    return;
  }
  const RandomNum = randomFrom2To32();
  if (!arr.includes(RandomNum)) {
    arr.push(RandomNum);
  }
  n++;
  getArr();
};
getArr();
