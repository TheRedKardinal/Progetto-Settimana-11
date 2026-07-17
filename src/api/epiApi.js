export async function searchSongs(query) {
  const safeQuery = encodeURIComponent(query);
  const r = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${safeQuery}`,
  );

  if (!r.ok) {
    throw new Error(`Errore nella ricerca: ${r.status}`);
  }

  const data = await r.json();
  return data.data;
}
