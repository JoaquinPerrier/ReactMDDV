import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

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

  return { imageUrl };
}
