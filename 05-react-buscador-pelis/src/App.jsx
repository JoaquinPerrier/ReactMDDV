import { useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  const inputRef = useRef();

  const handleSubmit = () => {
    event.preventDefault();
    const value = inputRef.current.value;
    console.log(value);
  };

  return (
    <div className="page">
      <h2>Buscador de peliculas</h2>
      <header>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Avengers, Star Wars, The Matrix.."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
