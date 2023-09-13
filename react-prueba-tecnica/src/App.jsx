import { useState, useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com/";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(" ")[0];

        fetch(
          `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            console.log(url);
            setImageUrl(url);
          });
      });
  }, []);

  return (
    <main>
      <h3>App de gatito</h3>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}></img>}
    </main>
  );
}
