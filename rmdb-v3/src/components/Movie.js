import React from "react";
//router可以获取参数useParams
import { useParams } from "react-router-dom";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
// 自定义hook
import { useMovieFetch } from "../hooks/useMovieFetch";

// 找不到使用的图片
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();

  //常规操作是用useHook获取参数..紧接着if...

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>出错了.{error}</div>;
  if (movie === {})  return <div>没有获取到数据</div>;

  return (
    <>
      <BreadCrumb
        movieTitle={movie.title}
        originalTitle={movie.original_title}
      />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      {movie.actors&&movie.actors.length > 0 && (
        <Grid header="演員表">
          {movie.actors &&
            movie.actors.map((actor) => (
              <Actor
                key={actor.credit_id}
                name={actor.name}
                character={actor.character}
                imageUrl={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : NoImage
                }
              />
            ))}
        </Grid>
      )}
    </>
  );
};

export default Movie;
