import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies: mappedMovies } = useMovies();

  return (
    <div className="page">
      <h2>Buscador de peliculas</h2>
      <header>
        <form action="" className="form">
          <input type="text" placeholder="Avengers, Star Wars, The Matrix.." />
          <button type="submit"> Buscar </button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
