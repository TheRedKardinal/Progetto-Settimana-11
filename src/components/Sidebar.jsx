import { useState } from "react";
import { searchSongs } from "../api/epiApi";

function Sidebar({ setResults }) {
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await searchSongs(query);
      setResults(data);
    } catch (error) {
      console.error(error);
    }
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
      <form onSubmit={handleSubmit} className="d-flex gap-2 align-items-start">
        <input
          className="form-control"
          aria-label="Cerca brani"
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

export default Sidebar;
