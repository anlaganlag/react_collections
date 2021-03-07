import React from "react";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { calPopularity } from "../helpers";
// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { useHomeFetch } from "../hooks/useHomeFetch";
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const {
    totalResults,
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  console.log(state);

  if (error) return <div>`出錯了.错误:${error}`</div>;
  return (
    <>
    {/* 搜索框为空的情况下,如果有第一个结果渲染.. */}
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          // postURL={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].title}
          titleOriginal={state.results[0].original_title}
          plot={state.results[0].overview}
          average={state.results[0].vote_average}
          popularity={calPopularity(state.results[0].popularity)}
          onStage={state.results[0].release_date}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? `搜索結果:${totalResults}条` : "時下流行电影"}>
        {state.results.map((movie) => (
          <Thumb
            title={movie.title}
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            onStage={movie.release_date}
            overview={movie.overview}
            averge = {movie.vote_average}
            popularity={calPopularity(movie.popularity)}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="更多" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
