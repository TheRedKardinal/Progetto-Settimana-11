import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./App.css";
import Aside from "./components/Aside";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Row>
          <Col xs={12} md={3}>
            <Aside setResults={setResults} />
          </Col>
          <Col xs={12} md={9}>
            <Home />
          </Col>
        </Row>
      </main>
    </>
  );
}

export default App;
