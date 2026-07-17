import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { setCurrentSong } from "../features/player/playerSlice";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

function MusicCard({ song }) {
  const dispatch = useDispatch();
  const favoriteSongs = useSelector((state) => state.favorites.favoriteSongs);
  const isFavorite = favoriteSongs.some((s) => s.id === song.id);

  function handlePlay() {
    dispatch(setCurrentSong(song));
  }

  function handleFavoriteClick(e) {
    e.stopPropagation();
    dispatch(toggleFavorite(song));
  }

  return (
    <Col
      className="cards d-flex flex-column align-items-center"
      role="button"
      tabIndex={0}
      onClick={handlePlay}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handlePlay();
      }}
    >
      <img src={song.album.cover_medium} alt={`Copertina di ${song.title}`} />
      <p className="m-0">{song.title}</p>
      <p className="m-0">{song.artist.name}</p>
      <button
        type="button"
        className="btn btn-link p-0 favorite-btn"
        aria-label={
          isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
        }
        onClick={handleFavoriteClick}
      >
        <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
      </button>
    </Col>
  );
}

export default MusicCard;
