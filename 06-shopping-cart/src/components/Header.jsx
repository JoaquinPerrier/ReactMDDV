import { Filters } from "./Filters";

export function Header({ changeFilters }) {
  return (
    <header>
      <Filters onChange={changeFilters} />
      <h1>React Shop </h1>
    </header>
  );
}
