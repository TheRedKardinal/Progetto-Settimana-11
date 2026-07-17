import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

function Player() {
  const currentSong = useSelector((state) => state.player.currentSong);
  const favoriteSongs = useSelector((state) => state.favorites.favoriteSongs);
  const dispatch = useDispatch();
  const [volume, setVolume] = useState(50);

  const isFavorite = currentSong
    ? favoriteSongs.some((s) => s.id === currentSong.id)
    : false;

  return (
    <footer className="player-bar d-flex align-items-center justify-content-between px-3">
      <div className="d-flex align-items-center gap-2 track-info">
        {currentSong && (
          <>
            <img
              src={currentSong.album.cover_medium}
              alt={`Copertina di ${currentSong.title}`}
              width={56}
              height={56}
            />
            <div>
              <p className="m-0">{currentSong.title}</p>
              <p className="m-0 text-muted">{currentSong.artist.name}</p>
            </div>
          </>
        )}
      </div>
      <div className="d-flex align-items-center gap-3 controls">
        <button
          type="button"
          className="btn btn-link p-0"
          aria-label="Brano precedente"
        >
          <i className="bi bi-skip-start-fill"></i>
        </button>
        <button type="button" className="btn btn-link p-0" aria-label="Play">
          <i className="bi bi-play-fill"></i>
        </button>
        <button
          type="button"
          className="btn btn-link p-0"
          aria-label="Brano successivo"
        >
          <i className="bi bi-skip-end-fill"></i>
        </button>
      </div>
      <div className="d-flex align-items-center gap-3 volume-group">
        <button
          type="button"
          className="btn btn-link p-0"
          aria-label={
            isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
          }
          disabled={!currentSong}
          onClick={() => currentSong && dispatch(toggleFavorite(currentSong))}
        >
          <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
        </button>
        <i className="bi bi-volume-up-fill" aria-hidden="true"></i>
        <input
          type="range"
          className="form-range volume-range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
        />
      </div>
    </footer>
  );
}

export default Player;
