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
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          aria-label="Cerca brani"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" aria-label="Cerca">
          <i className="bi bi-search"></i>
        </button>
      </form>

      <div className="d-none d-md-flex flex-column gap-2 sidebar-auth">
        <button type="button" className="btn search-btn">
          Registrati
        </button>
        <button type="button" className="btn search-btn">
          Login
        </button>
      </div>

      <p className="d-none d-md-block sidebar-legal mb-0">
        <a href="#">Cookie Policy</a> · <a href="#">Privacy</a>
      </p>
    </div>
  );
}

export default Sidebar;
