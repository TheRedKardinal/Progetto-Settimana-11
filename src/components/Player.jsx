import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

function formatDuration(seconds) {
  if (!seconds && seconds !== 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${remaining}`;
}

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
            <div className="track-text">
              <p className="m-0 text-truncate">{currentSong.title}</p>
              <p className="m-0 track-artist text-truncate">
                {currentSong.artist.name}
              </p>
            </div>
            <button
              type="button"
              className="btn btn-link p-0 favorite-btn"
              aria-label={
                isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
              }
              onClick={() => dispatch(toggleFavorite(currentSong))}
            >
              <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
            </button>
          </>
        )}
      </div>
      <div className="d-flex flex-column align-items-center controls-group">
        <div className="d-flex align-items-center gap-3 controls">
          <button
            type="button"
            className="btn btn-link p-0"
            aria-label="Brano precedente"
          >
            <i className="bi bi-skip-start-fill"></i>
          </button>
          <button
            type="button"
            className="btn btn-link p-0 play-btn"
            aria-label="Play"
          >
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
        <div className="d-flex align-items-center gap-2 progress-group">
          <span className="progress-time">0:00</span>
          <input
            type="range"
            className="form-range progress-range"
            min="0"
            max="100"
            defaultValue={0}
            aria-label="Avanzamento del brano"
          />
          <span className="progress-time">
            {formatDuration(currentSong?.duration)}
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3 volume-group">
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
