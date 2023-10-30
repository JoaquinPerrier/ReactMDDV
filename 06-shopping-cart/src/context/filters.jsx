import { createContext, useState } from "react";

// ESTE ES EL QUE HAY QUE CONSUMIR
export const FiltersContext = createContext();

// ESTE PROVEE LOS DATOS
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
