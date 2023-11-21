import { useRef } from "react";
import { useKey } from "../customHooks/useKey";
export default function Search({ query, setQuery }) {
  // Step 1. Initialization
  const inputElement = useRef(null);

  // Step 3. Utilization ==> element.current to get the current value of the ref

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });
  useKey("Escape", function () {
    if (document.activeElement !== inputElement.current) return;
    inputElement.current.blur();
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement} // Step 2. Declarative selection
    />
  );
}
