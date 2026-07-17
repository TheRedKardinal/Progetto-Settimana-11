import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
