import { useEffect, useState } from "react";
import { searchSongs } from "../api/epiApi";
import { Row, Col } from "react-bootstrap";

function Home() {
  const [songRock, setSongs] = useState([]);
  useEffect(() => {
    searchSongs("rock").then((data) => setSongs(data));
  }, []);
  return (
    <div>
      <h2>Rock</h2>
      <Row xs={2} md={4} className="g-3">
        {songRock.map((song) => (
          <Col key={song.id}>
            <img src={song.album.cover_medium} alt={song.title} />
            <p>{song.title}</p>
            <p>{song.artist.name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
