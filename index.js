const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3030;
const HOST = 'localhost';

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  const delay = Math.floor(Math.random() * 401) + 800;
  setTimeout(next, delay);
});

const movies = [
  { id: 1, title: 'The Godfather', hit: false },
  { id: 2, title: 'The Shawshank Redemption', hit: false },
  { id: 3, title: "Schindler's List", hit: false },
  { id: 4, title: 'Raging Bull', hit: false },
  { id: 5, title: 'Casablanca', hit: true },
  { id: 6, title: 'Citizen Kane', hit: false },
  { id: 7, title: 'Gone with the Wind', hit: true },
  { id: 8, title: 'Lawrence of Arabia', hit: true },
  { id: 9, title: 'Vertigo', hit: false },
  { id: 10, title: 'The Wizard of Oz', hit: true },
  { id: 11, title: "One Flew Over the Cuckoo's Nest", hit: false },
  { id: 12, title: 'Lawrence of Arabia', hit: false },
  { id: 13, title: 'Goodfellas', hit: false },
  {
    id: 14,
    title: 'The Lord of the Rings: The Return of the King',
    hit: false,
  },
  { id: 15, title: 'Pulp Fiction', hit: true },
  {
    id: 16,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    hit: false,
  },
  {
    id: 17,
    title: 'Star Wars: Episode V – The Empire Strikes Back',
    hit: true,
  },
  { id: 18, title: 'Inception', hit: false },
  { id: 19, title: 'The Lord of the Rings: The Two Towers', hit: false },
  { id: 20, title: 'Fight Club', hit: false },
  { id: 21, title: 'Forrest Gump', hit: false },
  { id: 22, title: 'The Matrix', hit: false },
  { id: 23, title: 'Good Will Hunting', hit: false },
  { id: 24, title: 'Back to the Future', hit: false },
  { id: 25, title: 'Seven Samurai', hit: true },
  { id: 26, title: 'Gladiator', hit: true },
  { id: 27, title: 'The Lion King', hit: true },
  { id: 28, title: 'Terminator 2: Judgment Day', hit: true },
  { id: 29, title: 'American Beauty', hit: true },
  { id: 30, title: 'The Usual Suspects', hit: false },
  { id: 31, title: 'Se7en', hit: false },
  { id: 32, title: 'Saving Private Ryan', hit: true },
  { id: 33, title: 'Spirited Away', hit: false },
  { id: 34, title: 'Interstellar', hit: false },
  { id: 35, title: 'The Green Mile', hit: false },
  { id: 36, title: 'Parasite', hit: false },
  { id: 37, title: 'Whiplash', hit: false },
  { id: 38, title: 'The Dark Knight', hit: true },
  { id: 39, title: 'The Prestige', hit: false },
  { id: 40, title: 'Memento', hit: false },
  { id: 41, title: 'Alien', hit: false },
  { id: 42, title: 'Blade Runner 2049', hit: false },
  { id: 43, title: 'Apocalypse Now', hit: false },
  { id: 44, title: 'The Departed', hit: false },
  { id: 45, title: 'Glengarry Glen Ross', hit: false },
  { id: 46, title: 'A Clockwork Orange', hit: false },
  { id: 47, title: 'Taxi Driver', hit: false },
  { id: 48, title: 'Rear Window', hit: false },
  { id: 49, title: 'Psycho', hit: false },
  { id: 50, title: 'Some Like It Hot', hit: true },
  { id: 51, title: '2001: A Space Odyssey', hit: false },
  { id: 52, title: 'Chinatown', hit: true },
  { id: 53, title: 'The Silence of the Lambs', hit: true },
  { id: 54, title: 'Jurassic Park', hit: false },
  { id: 55, title: 'The Shining', hit: false },
  { id: 56, title: 'It’s a Wonderful Life', hit: false },
  { id: 57, title: 'Amadeus', hit: false },
  { id: 58, title: 'Braveheart', hit: false },
  { id: 59, title: 'Titanic', hit: false },
  { id: 60, title: 'Django Unchained', hit: false },
  { id: 61, title: 'The Grand Budapest Hotel', hit: false },
  { id: 62, title: 'No Country for Old Men', hit: false },
  { id: 63, title: 'There Will Be Blood', hit: false },
  { id: 64, title: 'Moonlight', hit: true },
  { id: 65, title: 'In the Mood for Love', hit: false },
  { id: 66, title: 'Mulholland Drive', hit: false },
  { id: 67, title: 'Eternal Sunshine of the Spotless Mind', hit: false },
  { id: 68, title: 'Get Out', hit: false },
  { id: 69, title: 'The Social Network', hit: false },
  { id: 70, title: 'Mad Max: Fury Road', hit: false },
  { id: 71, title: 'Zodiac', hit: false },
  { id: 72, title: 'Blade Runner', hit: true },
  { id: 73, title: 'Oldboy', hit: false },
  { id: 74, title: 'The Lives of Others', hit: false },
  { id: 75, title: 'City of God', hit: false },
  { id: 76, title: "Pan's Labyrinth", hit: false },
  { id: 77, title: 'Amélie', hit: false },
  { id: 78, title: 'The Pianist', hit: false },
  { id: 79, title: 'Cinema Paradiso', hit: true },
  { id: 80, title: 'Rouge One', hit: false },
  { id: 81, title: 'The Intouchables', hit: false },
  { id: 82, title: 'The Hunt', hit: false },
  { id: 83, title: 'Her', hit: false },
  { id: 84, title: 'Blade Runner 2049', hit: false },
  { id: 85, title: 'Once Upon a Time in Hollywood', hit: false },
  { id: 86, title: 'La La Land', hit: false },
  { id: 87, title: 'Gravity', hit: false },
  { id: 88, title: 'The Revenant', hit: true },
  { id: 89, title: 'Whiplash', hit: false },
  { id: 90, title: 'Logan', hit: false },
  { id: 91, title: 'Fight Club', hit: false },
  { id: 92, title: 'Moulin Rouge!', hit: false },
  { id: 93, title: 'Black Swan', hit: true },
  { id: 94, title: 'The Wolf of Wall Street', hit: false },
  { id: 95, title: 'Slumdog Millionaire', hit: true },
  { id: 96, title: 'Inglourious Basterds', hit: true },
  { id: 97, title: 'Dances with Wolves', hit: false },
  { id: 98, title: 'The Great Dictator', hit: false },
  { id: 99, title: 'The Truman Show', hit: true },
  { id: 100, title: 'WALL·E', hit: false },
];

app.get('/movies', (req, res) => {
  const search = String(req.query.search || '')
    .trim()
    .toLowerCase();

  if (!search) {
    return res.json(movies);
  }

  const filtered = movies.filter((m) => m.title.toLowerCase().includes(search));
  return res.json(filtered);
});

app.get('/movie/:id/poster', (req, res) => {
  const filePath = path.join(__dirname, 'images', `${req.params.id}.jpg`);

  res.type('jpg');

  fs.createReadStream(filePath)
    .on('error', () => res.sendStatus(404))
    .pipe(res);
});

app.post('/purchase', (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: 'error',
      message: 'Неверный формат данных',
    });
  }
  const { ids, amount } = req.body;

  // базовая валидация
  if (!Array.isArray(ids) || typeof amount !== 'number') {
    return res.status(400).json({
      status: 'error',
      message: 'Неверный формат данных',
    });
  }

  const randomResult = Math.floor(Math.random() * 4);

  switch (randomResult) {
    case 0:
    case 1:
      return res.status(200).json({
        status: 'ok',
      });

    case 1:
      return res.status(402).json({
        status: 'error',
        message: 'не хватает средств',
      });

    case 2:
    default:
      return res.status(500).json({
        status: 'error',
        message: 'неизвестная ошибка',
      });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

module.exports = movies;
