import { useState, useEffect } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com/";

export function App() {
  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({ fact }); // SE PASA COMO OBJETO

  // Efecto para recuperar la cita del hecho curioso de gatos
  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
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
