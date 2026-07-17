import CategoryRow from "./CategoryRow";

function Home() {
  return (
    <>
      <CategoryRow title="Rock" query="rock" />
      <CategoryRow title="Elettronica" query="elettronica" />
      <CategoryRow title="Hip Hop" query="hiphop" />
    </>
  );
}

export default Home;
