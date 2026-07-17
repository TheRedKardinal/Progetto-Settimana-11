import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { searchSongs } from "../api/epiApi";
import MusicCard from "./MusicCard";

function MusicSection({ title, query }) {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    searchSongs(query)
      .then((data) => setSongs(data))
      .catch(() =>
        setError("Impossibile caricare i brani. Riprova più tardi."),
      )
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <section className="category-cards">
      <h2>{title}</h2>
      {isLoading && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" role="status" />
          <span>Caricamento...</span>
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
      {!isLoading && !error && (
        <Row xs={2} md={4} className="g-2">
          {songs.slice(0, 4).map((song) => (
            <MusicCard key={song.id} song={song} />
          ))}
        </Row>
      )}
    </section>
  );
}

export default MusicSection;
