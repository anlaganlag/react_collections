import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Image, Text } from "./Thumb.styles";

const Thumb = ({
  image,
  movieId,
  clickable,
  title,
  popularity,
  onStage,
  overview,
  averge,
}) => (
  <div title={`${overview && overview.slice(0, 65)}... (热度: ${popularity})`}>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
    {/* <popularity>流行度:+{popularity}</popularity> */}
    {/* <div style={{ textAlign: "center" }}> */}
    <Text>
      <div className="title">
        <h5 title={"上映时间" + onStage}>
          {title} {averge > 0 && `(${averge})`}
        </h5>
      </div>
    </Text>
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
