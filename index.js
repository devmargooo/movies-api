const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3030;
const HOST = 'localhost';

app.use(cors());

const MOVIES = [
  { id: 1, title: 'The Godfather' },
  { id: 2, title: 'The Shawshank Redemption' },
  { id: 3, title: "Schindler's List" },
  { id: 4, title: 'Raging Bull' },
  { id: 5, title: 'Casablanca' },
  { id: 6, title: 'Citizen Kane' },
  { id: 7, title: 'Gone with the Wind' },
  { id: 8, title: 'Lawrence of Arabia' },
  { id: 9, title: 'Vertigo' },
  { id: 10, title: 'The Wizard of Oz' },
  { id: 11, title: "One Flew Over the Cuckoo's Nest" },
  { id: 12, title: 'Lawrence of Arabia' },
  { id: 13, title: 'Goodfellas' },
  { id: 14, title: 'The Lord of the Rings: The Return of the King' },
  { id: 15, title: 'Pulp Fiction' },
  { id: 16, title: 'The Lord of the Rings: The Fellowship of the Ring' },
  { id: 17, title: 'Star Wars: Episode V – The Empire Strikes Back' },
  { id: 18, title: 'Inception' },
  { id: 19, title: 'The Lord of the Rings: The Two Towers' },
  { id: 20, title: 'Fight Club' },
  { id: 21, title: 'Forrest Gump' },
  { id: 22, title: 'The Matrix' },
  { id: 23, title: 'Good Will Hunting' },
  { id: 24, title: 'Back to the Future' },
  { id: 25, title: 'Seven Samurai' },
  { id: 26, title: 'Gladiator' },
  { id: 27, title: 'The Lion King' },
  { id: 28, title: 'Terminator 2: Judgment Day' },
  { id: 29, title: 'American Beauty' },
  { id: 30, title: 'The Usual Suspects' },
  { id: 31, title: 'Se7en' },
  { id: 32, title: 'Saving Private Ryan' },
  { id: 33, title: 'Spirited Away' },
  { id: 34, title: 'Interstellar' },
  { id: 35, title: 'The Green Mile' },
  { id: 36, title: 'Parasite' },
  { id: 37, title: 'Whiplash' },
  { id: 38, title: 'The Dark Knight' },
  { id: 39, title: 'The Prestige' },
  { id: 40, title: 'Memento' },
  { id: 41, title: 'Alien' },
  { id: 42, title: 'Blade Runner 2049' },
  { id: 43, title: 'Apocalypse Now' },
  { id: 44, title: 'The Departed' },
  { id: 45, title: 'Glengarry Glen Ross' },
  { id: 46, title: 'A Clockwork Orange' },
  { id: 47, title: 'Taxi Driver' },
  { id: 48, title: 'Rear Window' },
  { id: 49, title: 'Psycho' },
  { id: 50, title: 'Some Like It Hot' },
  { id: 51, title: '2001: A Space Odyssey' },
  { id: 52, title: 'Chinatown' },
  { id: 53, title: 'The Silence of the Lambs' },
  { id: 54, title: 'Jurassic Park' },
  { id: 55, title: 'The Shining' },
  { id: 56, title: 'It’s a Wonderful Life' },
  { id: 57, title: 'Amadeus' },
  { id: 58, title: 'Braveheart' },
  { id: 59, title: 'Titanic' },
  { id: 60, title: 'Django Unchained' },
  { id: 61, title: 'The Grand Budapest Hotel' },
  { id: 62, title: 'No Country for Old Men' },
  { id: 63, title: 'There Will Be Blood' },
  { id: 64, title: 'Moonlight' },
  { id: 65, title: 'In the Mood for Love' },
  { id: 66, title: 'Mulholland Drive' },
  { id: 67, title: 'Eternal Sunshine of the Spotless Mind' },
  { id: 68, title: 'Get Out' },
  { id: 69, title: 'The Social Network' },
  { id: 70, title: 'Mad Max: Fury Road' },
  { id: 71, title: 'Zodiac' },
  { id: 72, title: 'Blade Runner' },
  { id: 73, title: 'Oldboy' },
  { id: 74, title: 'The Lives of Others' },
  { id: 75, title: 'City of God' },
  { id: 76, title: "Pan's Labyrinth" },
  { id: 77, title: 'Amélie' },
  { id: 78, title: 'The Pianist' },
  { id: 79, title: 'Cinema Paradiso' },
  { id: 80, title: 'Rouge One' },
  { id: 81, title: 'The Intouchables' },
  { id: 82, title: 'The Hunt' },
  { id: 83, title: 'Her' },
  { id: 84, title: 'Blade Runner 2049' },
  { id: 85, title: 'Once Upon a Time in Hollywood' },
  { id: 86, title: 'La La Land' },
  { id: 87, title: 'Gravity' },
  { id: 88, title: 'The Revenant' },
  { id: 89, title: 'Whiplash' },
  { id: 90, title: 'Logan' },
  { id: 91, title: 'Fight Club' },
  { id: 92, title: 'Moulin Rouge!' },
  { id: 93, title: 'Black Swan' },
  { id: 94, title: 'The Wolf of Wall Street' },
  { id: 95, title: 'Slumdog Millionaire' },
  { id: 96, title: 'Inglourious Basterds' },
  { id: 97, title: 'Dances with Wolves' },
  { id: 98, title: 'The Great Dictator' },
  { id: 99, title: 'The Truman Show' },
  { id: 100, title: 'WALL·E' },
];

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
