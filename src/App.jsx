import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Player from "./components/Player";

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>
        <Row>
          <Col xs={12} md={2} className="sidebar-col">
            <Sidebar setResults={setResults} />
          </Col>
          <Col xs={12} md={10}>
            <Home results={results} />
          </Col>
        </Row>
      </main>
      <Player />
    </>
  );
}

export default App;
