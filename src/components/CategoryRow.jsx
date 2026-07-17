import { useEffect, useState } from "react";
import { searchSongs } from "../api/epiApi";
import { Row, Col } from "react-bootstrap";

function CategoryRow({ title, query }) {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    searchSongs(query).then((data) => setSongs(data));
  }, [query]);
  return (
    <div className="category-cards">
      <h2>{title}</h2>
      <Row xs={2} md={4} className="g-2">
        {songs.slice(0, 4).map((song) => (
          <Col
            key={song.id}
            className="cards d-flex flex-column align-items-center"
          >
            <img src={song.album.cover_medium} alt={song.title} />
            <p className="m-0">{song.title}</p>
            <p className="m-0">{song.artist.name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategoryRow;
