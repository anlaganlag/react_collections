import React, { useEffect, useState } from "react";
import axios from "axios";
import parser from "fast-xml-parser";
import { MdInfo } from "react-icons/md";
import { FaDice } from "react-icons/fa";
import {
  Box,
  Input,
  Button,
  Collapse,
  Heading,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Accordion,
  AccordionPanel,
  Checkbox,
  Tooltip,
  useToast,
  Icon,
  Select,
  Text,
  Link,
} from "@chakra-ui/core";

import Modal from "./Components/Modal";
import ChosenGame from "./Components/ChosenGame";
import Game from "./Components/Game";
import Shape from "./Components/Shapes";

import "./App.css";
import "./pattern.css";

function App() {
  const MAX_RETRY = 5;
  let currentRetry = 1;
  axios.interceptors.response.use(
    function (response) {
      if (response.data.status === 202) {
        throw new axios.Cancel("等待输入筛选条件");
      } else {
        return response;
      }
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  //随机提供几个用户名字..可搜索他们拥有的游戏
  const userList = [
    "tabicat",
    "b5dorsai",
    "mpalframan",
    "Gamezombiac",
    "tolarianrector",
  ];
  const choseUser = userList[Math.floor(Math.random() * userList.length)];
  const [username, setUsername] = useState(choseUser);
  const [activeUsername, setActiveUsername] = useState("");

  const [minRating, setMinRating] = useState(null);
  const [rating, setRating] = useState(null);
  const [minBGGRating, setMinBGGRating] = useState(null);
  const [rated, setRated] = useState(false);
  const [played, setPlayed] = useState(false);
  const [comment, setComment] = useState(false);
  const [hideExpansions, setHideExpansions] = useState(false);

  const [activeCollection, setActivecollection] = useState([]);
  const [chosenGame, setChosenGame] = useState();

  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [collectionVisible, setCollectionVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    chooseRandomeGame();
  }, [activeCollection]);

  const successHandler = (res) => {
    const parsedCollection = parser.parse(res.data, {
      ignoreAttributes: false,
    });
    console.log("parsed=>", parsedCollection);
    if (parsedCollection.items.item === undefined) {
      setActivecollection([]);
      toast.closeAll();
      toast({
        title: "没有游戏符合你的要求",
        description: "请修改搜索要求",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
    } else {
      console.log("type=>", Array.isArray(parsedCollection.items.item));
      if (Array.isArray(parsedCollection.items.item)) {
        setActivecollection(parsedCollection.items.item);
      } else {
        setActivecollection([parsedCollection.items.item]);
      }
      setActiveUsername(username);
      setLoading(false);
      toast.closeAll();
      toast({
        title: "要求结果已经返回!",
        description: "所有满足要求结果已返回了",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const errorHandler = (err) => {
    console.log(err.response);
    if (currentRetry < MAX_RETRY) {
      currentRetry++;
      console.log("再试一次中...");
      setTimeout(requestCollection, 1000 * currentRetry);
    } else {
      setLoading(false);
      toast({
        title: "没哟找到或者网络不稳定",
        description: "要么用户不存在或者BGG平台现在出了点问题..",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      console.log("又尝试了好几次还是失败了..");
    }
  };

  const requestCollection = () => {
    setLoading(true);
    axios
      .get("https://www.boardgamegeek.com/xmlapi2/collection", {
        params: {
          username: username,
          stats: 1,
          own: 1,
          minrating: minRating === "任意评分" ? null : minRating,
          rating: rating === "任意评分" ? null : rating,
          minbggrating: minBGGRating === "任意评分" ? null : minBGGRating,
          rated: rated ? 1 : null,
          played: played ? 1 : null,
          comment: comment ? 1 : null,
          excludesubtype: hideExpansions ? "不显示扩展包" : null,
        },
      })
      .then(successHandler)
      .catch(errorHandler);
  };

  const chooseRandomeGame = () => {
    const game =
      activeCollection[Math.floor(Math.random() * activeCollection.length)];
    setChosenGame(game);
  };

  return (
    <div className="App">
      <div className="main">
        <h1 className="title">
          <Heading>随机抽个桌游吧!</Heading>
        </h1>
        <Text color="gray.500" align="left">
          BGG(BoardGameGeek)是全世界最大的桌游网站(含几乎所有桌游比如围棋..)，其通过评分和评论数
          数相结合的方式编排了桌游榜单，为广大桌游爱好者提供了参考。
          输入你的用户名或任意用户名如tabicat返回该用户拥有的
          <b>一个随机的桌游</b>!
        </Text>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          className="form"
          placeholder="请输入自己的BGG用户名或者其他人的用户名"
          defaultValue={choseUser}
          size="lg"
          style={{
            margin: "10px 0 10px 0",
            color: "#718096",
            zIndex: "1",
          }}
        />
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" style={{ color: "#718096" }}>
                高级选项
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={10}>
              <div className="stack">
                <small>用户评分(下限)</small>
                <Select onChange={(e) => setMinRating(e.target.value)}>
                  <option value="任意评分">任意评分</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </Select>
                <small>用户评分(上限)</small>
                <Select onChange={(e) => setRating(e.target.value)}>
                  <option value="任意评分">任意评分</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </Select>
                <small>BGG官方平台评分(下限)</small>
                <Select onChange={(e) => setMinBGGRating(e.target.value)}>
                  <option value="任意评分">任意评分</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </Select>
                <div className="checkbox-group">
                  <Checkbox
                    isChecked={hideExpansions}
                    onChange={() => setHideExpansions(!hideExpansions)}
                    size="lg"
                    colorScheme="teal"
                  >
                    隐藏扩展包
                  </Checkbox>
                </div>
                <div className="checkbox-group">
                  <Checkbox
                    isChecked={rated}
                    onChange={() => setRated(!rated)}
                    size="lg"
                    colorScheme="teal"
                  >
                    已评分
                   </Checkbox>
				   {/*
                  <Tooltip label="已经评分" aria-label="Rated filter tooltip">
                    <span>
                      <MdInfo />
                    </span>
                  </Tooltip> */}
				  <Tooltip label="Only games that have been rated" aria-label="Rated filter tooltip">
										<span><MdInfo/></span>
									</Tooltip>
                </div>
                <div className="checkbox-group">
                  <Checkbox
                    isChecked={played}
                    onChange={() => setPlayed(!played)}
                    size="lg"
                    colorScheme="teal"
                  >
                    已玩过
                  </Checkbox>
                  <Tooltip
                    label="至少有一个用户玩过"
                    aria-label="Played filter tooltip"
                  >
                    <span>
                      <MdInfo />
                    </span>
                  </Tooltip>
                </div>
                <div className="checkbox-group">
                  <Checkbox
                    isChecked={comment}
                    onChange={() => setComment(!comment)}
                    size="lg"
                    colorScheme="teal"
                  >
                    已评论
                  </Checkbox>
                  <Tooltip label="已评论" aria-label="Comment filter tooltip">
                    <span>
                      <MdInfo />
                    </span>
                  </Tooltip>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button
          isDisabled={!username.length > 0}
          colorScheme="teal"
          variant={activeCollection.length > 0 ? "outline" : "solid"}
          onClick={() => {
            toast({
              title: " 开始查询",
              description: "根据数据量和网络状况,几秒到几十秒不等..",
              status: "info",
              duration: 7000,
              isClosable: true,
            });
            requestCollection();
          }}
          isLoading={loading}
          style={{ margin: "10px 0 10px 0", width: "100%" }}
        >
          {activeCollection.length > 0 ? (
            <>
              更新选项再抽一次 &nbsp; <Icon as={FaDice} />
            </>
          ) : (
            <>
              随机抽一个 &nbsp; <Icon as={FaDice} />
            </>
          )}
        </Button>
        {activeCollection.length > 0 ? (
          <Button
            colorScheme="teal"
            onClick={chooseRandomeGame}
            isLoading={loading}
            style={{ margin: "10px 0 10px 0", width: "100%" }}
          >
            换一换 <Icon as={FaDice} />
          </Button>
        ) : null}

        {chosenGame ? (
          <div className="chosen-game">
            <ChosenGame game={chosenGame} />
          </div>
        ) : null}

        <div
          className="toggle-area"
          onClick={() => setCollectionVisible(!collectionVisible)}
        >
          <h2 className="subtitle">
            {!activeCollection?.length
              ? "没有任何数据"
              : `用户${activeUsername} 总共有(${activeCollection.length})个游戏符合要求 `}
          </h2>
        </div>

        <Collapse isOpen={collectionVisible}>
          {!activeCollection  ? (                    
            <></>
          ) : (
            activeCollection.map((game) => <Game key={game.name} game={game} />)
          )}
        </Collapse>
        <footer>
          <Text color="gray.500" fontSize="sm">
            <Link href="https://www.buymeacoffee.com/amedpal" isExternal>
              支持作者
            </Link>{" "}
            | &nbsp;
            <Link
              href="https://github.com/alfremedpal/board-game-picker"
              isExternal
            >
              源代码
            </Link>{" "}
            | &nbsp;
            <Link onClick={() => setModalOpen(true)}>和我联系</Link>
          </Text>
          <Text color="gray.500" fontSize="sm">
            本项目用的是BoardGameGeek的官方API.
          </Text>
        </footer>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <Shape type="triangle" />
      <Shape type="square" />
      <Shape type="circle" />
    </div>
  );
}

export default App;
