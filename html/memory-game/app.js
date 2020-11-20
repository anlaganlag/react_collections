document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "薯條",
      img: "cards/薯條.png",
    },
    {
      name: "漢堡",
      img: "cards/漢堡.png",
    },
    {
      name: "冰棍",
      img: "cards/冰棍.png",
    },
    {
      name: "比薩",
      img: "cards/比薩.png",
    },
    {
      name: "奶惜",
      img: "cards/奶惜.png",
    },
    {
      name: "熱狗",
      img: "cards/熱狗.png",
    },
    {
      name: "薯條",
      img: "cards/薯條.png",
    },
    {
      name: "漢堡",
      img: "cards/漢堡.png",
    },
    {
      name: "冰棍",
      img: "cards/冰棍.png",
    },
    {
      name: "比薩",
      img: "cards/比薩.png",
    },
    {
      name: "奶惜",
      img: "cards/奶惜.png",
    },
    {
      name: "熱狗",
      img: "cards/熱狗.png",
    },
    // var oldChild = node.removeChild(child);
    // OR
    // node.removeChild(child);
  ];
  cardArray.sort(() => 0.5 - Math.random());

  const title = document.querySelector("#title");
  // const title = document.querySelector("#title");
  const board = document.querySelector("#board");
  const history = document.querySelector("#history");
  //最多選擇2個Food的列表..即只有[0]和[1]兩個Food..會被隨時更新...[]
  let pairFood = [];
  //對應ojb的ID
  let pairFoodId = [];
  const finishedFood = [];
  let tries = 0;

  // 创建卡片,就是在board里面添加所有卡片...是img 包括src,id以及事件..
  function createCards() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "cards/失败背面.png");
      card.setAttribute("cardId", i);
      card.addEventListener("click", flipCard);
      board.appendChild(card);
    }
  }
  //程序开头由一次点击开启...一次點擊反轉卡片,獲取到該卡片的id和Food包括name和圖片兩個屬性..
  function flipCard() {
    const cardId = this.getAttribute("cardId");
    pairFoodId.push(cardId);
    pairFood.push(cardArray[cardId].name);
    //点击显示图片是瞬间完成..但是后面的checkPair却是延时
    this.setAttribute("src", cardArray[cardId].img);
    //第二次点击时岩石开始比对
    if (pairFood.length === 2) {
      setTimeout(checkPair, 200);
    }
  }

  function checkPair() {
    const cards = document.querySelectorAll("img");
    [FoodNameID1, FoodNameID2] = pairFoodId;
    [FoodName1, FoodName2] = pairFood;
    const [Food1, Food2] = [cards[FoodNameID1], cards[FoodNameID2]];
    //ID相同不算消除..因为点击的是同样的图片..
    if (FoodNameID1 == FoodNameID2) {
      Food1.setAttribute("src", "cards/失败背面.png");
      //id不同时且获取相同图片的文件地址放入history
    } else if (FoodName1 === FoodName2) {
      //保存进history
      const FoodImageInHistory = document.createElement("img");
      FoodImageInHistory.setAttribute("src", Food1.getAttribute("src"));
      history.appendChild(FoodImageInHistory);
      //显示成功的图片即空白消除且取出事件监听
      Food1.setAttribute("src", "cards/成功空白.png");
      Food2.setAttribute("src", "cards/成功空白.png");
      Food1.setAttribute("finished", true);
      Food2.setAttribute("finished", true);
      Food1.removeEventListener("click", flipCard);
      Food2.removeEventListener("click", flipCard);
      finishedFood.push(FoodName1);
    } else {
      tries++;
      Food1.setAttribute("src", "cards/失败背面.png");
      Food2.setAttribute("src", "cards/失败背面.png");
    }
    //即无论选择了同样的图片还是匹配的还是不一样都要清空..
    //食物对和食物id对...
    pairFood = [];
    pairFoodId = [];
    let findFood = history.lastChild
      .getAttribute("src")
      .split("/")[1]
      .split(".")[0];
    title.textContent = tries
      ? `找到一个${findFood}  已找到:${finishedFood.length} 尝试:${tries}次`
      : "";

    //匹配成功数达到总数的一半时,即全部匹配出来
    if (finishedFood.length === cardArray.length / 2) {
      board.style.display = "none";
      history.style.display = "none";
      setTimeout(() => {
        title.textContent =
          tries <= 4
            ? `牛逼了...!居然${tries}次就全部找到了`
            : `共尝试了${tries}次,哈哈~~`;
        setTimeout(() => {
          title.textContent = "已经结束了";
          setTimeout(() => {
            title.textContent = "";
            const endButton = document.createElement("button");
            endButton.textContent = "再来一次";
            endButton.addEventListener("click", () => window.location.reload());
            title.appendChild(endButton);
          }, 500);
        }, 500);
      }, 500);
    }
  }

  createCards();
});
