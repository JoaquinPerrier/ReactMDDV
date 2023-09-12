import { useState, useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));

    return () => {
      second;
    };
  }, []);

  return (
    <main>
      <h3>App de gatito</h3>
      {fact && <p> {fact} </p>}
    </main>
  );
}
