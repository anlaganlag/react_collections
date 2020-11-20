import React from "react";
import PropTypes from "prop-types";
// Components
import Thumb from "../Thumb";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from "../../images/no_image.jpg";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
        alt="movie-thumb"
      />
      <Text>
        <h1>
          {movie.title}{" "}
          {movie.original_title === movie.title
            ? ""
            : `${movie.original_title}`}
        </h1>
        <h1>{movie.p}</h1>
        {movie.release_date && <p>上映日期:{movie.release_date}</p>}
        {movie.overview && <h3>劇情簡介:</h3>}
        <p>{movie.overview}</p>

        <div className="rating-directors">
          {movie.vote_average > 0 && (
            <div>
              <h3>評分</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
          )}
          {movie.directors&& movie.directors.length > 0 && (
            <div className="actor">
              <h3>導演</h3>
              {movie.directors?.map((actor) => (
                <p key={actor.credit_id}>{actor.name}</p>
              ))}
            </div>
          )}

           {movie.actors&&movie.actors.length > 0 && (
            <div className="actor">
              <h3>主演</h3>
              {movie.actors?.map(
                (actor, idx) =>
                  idx < 5 && (
                    // <p key={actor.credit_id}>{actor.name}</p>
                    <p key={actor.credit_id}>
                      {actor.name}({actor.gender === 1 ? "女" : "男"})
                    </p>
                  )
              )}
            </div>
          )}
          {movie.genres  && (
            <div className="genres">
              <h3>类别</h3>
              {movie.genres?.map(
                (genres, idx) =>
                  idx < 4 && <p key={genres.id}>{genres.name} </p>
              )}
            </div>
          )}
          {movie.spoken_languages && (
            <div className="language">
              <h3>语言</h3>
              {movie.spoken_languages?.map((language, idx) => (
                <p key={language.credit_id}>{language.name}</p>
              ))}
            </div>
          )}
        </div>
      </Text>
    </Content>
  </Wrapper>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
