import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, plot, onStage, average,title2 ,popularity,calPopularity}) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>
           热榜Top1 {title} {title2 === title?"":title2} 
        </h1>
        <p>{plot}</p>

        <p>评分:{average}</p>
        <p>热度:{popularity}</p>
        <p>上映时间:{onStage}</p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
