import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com/";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact }); // SE PASA COMO OBJETO

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h3>App de gatito</h3>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}></img>}
    </main>
  );
}
