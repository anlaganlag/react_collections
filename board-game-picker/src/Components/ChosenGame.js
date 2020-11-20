import React from "react";
import { GiMeeple } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { Box, Image, Text, Icon, Heading, Link } from "@chakra-ui/core";
import {formatChosenTitle,formatRange,htmlDecode} from "./utils"

export default function ChosenGame({ game, game: { image, stats } }) {
    const name = htmlDecode(formatChosenTitle(game.name["#text"]))
    const playerCount =formatRange(stats["@_minplayers"],stats["@_maxplayers"])
    const bggRating =stats.rating.average["@_value"].slice(0, 4)
    const playingTime =formatRange(stats["@_minplaytime"],stats["@_maxplaytime"])
    const idURL ="https://boardgamegeek.com/boardgame/" + game["@_objectid"]
    const gray = "gray.500"
    const IconColor = "#319795"


  // console.log("xxxxxxx",stats)
  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={name} />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Heading color={gray} fontSize="1.5em">
            <small style={{fontSize:"0.5em"}}>
              评分{bggRating}
              </small>   <br/>     {name}
          </Heading>
        </Box>
        <Text textAlign="center" >
          <Icon color={IconColor} as={GiMeeple} />
          玩家数 {playerCount}
          &nbsp;
          <br />
          <Icon color={IconColor} as={BsClock} /> 游戏时长 {playingTime}分钟
          <br />
          <Link href={idURL} isExternal color="gray.500">
            在BGG平台查看
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
