import Hero from "./Hero";
import MusicSection from "./MusicSection";
import SearchResults from "./SearchResults";

function Home({ results }) {
  return (
    <>
      <Hero />
      <SearchResults results={results} />
      <MusicSection title="Rock" query="rock" />
      <MusicSection title="Pop" query="pop" />
      <MusicSection title="Hip Hop" query="hiphop" />
    </>
  );
}

export default Home;
