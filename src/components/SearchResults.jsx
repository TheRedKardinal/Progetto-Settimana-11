import { Row } from "react-bootstrap";
import MusicCard from "./MusicCard";

function SearchResults({ results }) {
  if (!results || results.length === 0) return null;

  return (
    <section className="category-cards">
      <h2>Risultati della ricerca</h2>
      <Row xs={2} md={4} className="g-2">
        {results.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </Row>
    </section>
  );
}

export default SearchResults;
