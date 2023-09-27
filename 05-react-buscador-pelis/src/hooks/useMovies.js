import withResults from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";
import { useState } from "react";
const API_KEY = "4287ad07";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search;

  // Se mappea para no depender del contrato de la API, y formatearlo como el programador quiera
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      // setResponseMovies(withResults);
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        .then((res) => res.json())
        .then((json) => setResponseMovies(json));
    } else {
      setResponseMovies(withoutResults);
    }
  };

  return { movies: mappedMovies, getMovies };
}
