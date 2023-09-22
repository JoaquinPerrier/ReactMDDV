import responseMovies from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";

export function useMovies() {
  const movies = responseMovies.Search;

  // Se mappea para no depender del contrato de la API, y formatearlo como el programador quiera
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
