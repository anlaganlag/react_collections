import React, { useState } from "react";
import { Icon, Link } from "@chakra-ui/core";
import { GiMeeple } from "react-icons/gi";
import { BsClock } from "react-icons/bs";

import classes from "./Game.module.css";
import { formatRange, htmlDecode } from "./utils";

export default function Game({
  game,
  game: { thumbnail, yearpublished, stats },
}) {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const name = htmlDecode(game.name["#text"]);
  const playerCount = formatRange(
    stats["@_minplayers"],
    stats["@_maxplayers"]
  );
  const playingTime = formatRange(
    stats["@_minplaytime"],
    stats["@_maxplaytime"]
  );
  const bggRating = stats.rating.average["@_value"].slice(0, 4);

  const idURL = "https://boardgamegeek.com/boardgame/" + game["@_objectid"];
  const teal = "teal.500";
  const gray = "gray.500";

  return (
    <>
      <div
        className={classes.main}
        onClick={() => setDetailsVisible(!detailsVisible)}
      >
        <img src={thumbnail} alt={name} width="75" height="75" />
        <div className={classes.info}>
          <div>
            <h3>
              {name}{" "}
              <small>
                ({yearpublished+"年"} {" "} {bggRating}分)
              </small>
            </h3>
          </div>
          <div>
            <Icon color={teal} as={GiMeeple} /> 玩家数 {playerCount}
            &nbsp;
            <Icon color="teal.500" as={BsClock} /> 游戏时长 {playingTime}分钟
            <br />
            <Link href={idURL} isExternal color={gray}>
              在BGG平台查看
            </Link>
          </div>
        </div>
      </div>
      {/* <Collapse isOpen={detailsVisible}>
            <div className={classes.details}>
                Hey
            </div>
        </Collapse> */}
    </>
  );
}
