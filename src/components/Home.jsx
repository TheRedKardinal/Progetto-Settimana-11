import { useEffect, useState } from "react";
import { searchSongs } from "../api/epiApi";
import { Row, Col } from "react-bootstrap";

function Home() {
  const [songRock, setSongs] = useState([]);
  useEffect(() => {
    searchSongs("rock").then((data) => setSongs(data));
  }, []);
  return (
    <div className="category-cards">
      <h2>Rock</h2>
      <Row xs={2} md={4} className="g-2">
        {songRock.map((song) => (
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

export default Home;
