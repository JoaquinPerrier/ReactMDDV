import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // FORMAS NO CONTROLADAS:
    // RECUPERAR USANDO USEREF
    /* const value = inputRef.current.value;
    console.log(value); */

    // RECUPERAR CON FORM DATA
    // const { query } = Object.fromEntries(new FormData(event.target)); // NOMBRE QUE ESTA EN EL NAME DEL INPUT

    console.log({ query });
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (newQuery.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (newQuery.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  };

  // useEffect(() => {
  //   if (newQuery === "") {
  //     setError("No se puede buscar una pelicula vacia");
  //     return;
  //   }

  //   if (newQuery.match(/^\d+$/)) {
  //     setError("No se puede buscar una película con un número");
  //     return;
  //   }

  //   if (newQuery.length < 3) {
  //     setError("La búsqueda debe tener al menos 3 caracteres");
  //     return;
  //   }
  //   setError(null);
  // }, [query]);

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
            value={query}
            type="text"
            placeholder="Avengers, Star Wars, The Matrix.."
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
