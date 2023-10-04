import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // FORMAS NO CONTROLADAS:
    // RECUPERAR USANDO USEREF
    /* const value = inputRef.current.value;
    console.log(value); */

    // RECUPERAR CON FORM DATA
    // const { query } = Object.fromEntries(new FormData(event.target)); // NOMBRE QUE ESTA EN EL NAME DEL INPUT

    getMovies();
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    updateSearch(newQuery);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <h2>Buscador de peliculas</h2>
      <header>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            name="query"
            ref={inputRef}
            value={search}
            type="text"
            placeholder="Avengers, Star Wars, The Matrix.."
            onChange={handleChange}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando películas...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
