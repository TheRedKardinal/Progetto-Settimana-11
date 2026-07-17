import { useState } from "react";
import { searchSongs } from "../api/epiApi";

function Aside({ setResults }) {
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await searchSongs(query);
    setResults(data);
  }

  return (
    <div className="sidebar d-flex flex-row flex-md-column gap-3 gap-md-4">
      <p className="d-flex align-items-center gap-2 mb-0">
        <i className="bi bi-house-door-fill"></i>
        <span className="d-none d-md-inline">Home</span>
      </p>
      <p className="d-flex align-items-center gap-2 mb-0">
        <i className="bi bi-book-fill"></i>
        <span className="d-none d-md-inline">Your Library</span>
      </p>
      <form onSubmit={handleSubmit} className="d-flex gap-2 flex-grow-1">
        <input
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-light">
          Cerca
        </button>
      </form>
    </div>
  );
}

export default Aside;
