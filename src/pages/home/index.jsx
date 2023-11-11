import React, { useEffect } from "react";
import "./home.scss";
import MovieListing from "../../components/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../store/slices/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies("Fast and Furious"));
    dispatch(fetchAsyncShows("Star wars"));
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
