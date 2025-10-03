const express = require('express');

const app = express();
const PORT = 3030;
const HOST = 'localhost';

// Создаём массив из 100 фильмов с id и title
const MOVIES = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
}));

app.get('/movies', (req, res) => {
  const search = String(req.query.search || '')
    .trim()
    .toLowerCase();

  if (!search) {
    return res.json(MOVIES);
  }

  const filtered = MOVIES.filter((m) => m.title.toLowerCase().includes(search));
  return res.json(filtered);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
