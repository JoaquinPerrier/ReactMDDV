import { useState, useEffect } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com/";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // Efecto para recuperar la cita del hecho curioso de gatos
  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  // Effect para recuperar la imagen con la primer palabra del fact de los gatos
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ")[0];
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

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
