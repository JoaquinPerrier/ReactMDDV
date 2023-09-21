import "./App.css";
import responseMovies from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";
import { Movies } from "./components/Movies";

function App() {
  const movies = responseMovies.Search;

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
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
