import { useRef, useState, useMemo } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useMemo(() => {
    return async () => {
      if (search === previousSearch.current) return;
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        // Se ejecuta tanto en el try como en el catch
        setLoading(false);
      }
    };
  }, [search]);

  /*
  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;*/

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
