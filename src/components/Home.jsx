import Hero from "./Hero";
import MusicSection from "./MusicSection";
import SearchResults from "./SearchResults";

function Home({ results }) {
  return (
    <div className="home-content mx-auto">
      <Hero />
      <SearchResults results={results} />
      <MusicSection title="Rock" query="rock" />
      <MusicSection title="Pop" query="pop" />
      <MusicSection title="Hip Hop" query="hiphop" />
    </div>
  );
}

export default Home;
