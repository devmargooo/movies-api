const fs = require('fs');
const path = require('path');
const dns = require('node:dns');
dns.setDefaultResultOrder('verbatim'); // Node будет использовать обычный порядок из OS

const movies = [
  //   { id: 1, title: 'The Godfather', hit: false },
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

const TMDB_API_KEY = '2fb6d8509793f970895765f1b2a310c7';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

if (!TMDB_API_KEY) {
  console.log('❌ TMDB_API_KEY is not set');
  process.exit(1);
}

/**
 * Поиск фильма в TMDB
 * @param {string} title
 */
async function searchMovie(title) {
  const url = `${SEARCH_URL}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
    title
  )}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`TMDB search failed: ${response.status}`);
    const data = await response.json();
    return data.results?.[0] || null;
  } catch (err) {
    console.log(`❌ Fetch error for "${title}":`, err.message);
    return null;
  }
}

/**
 * Загрузка постера
 */
async function downloadImage(url, filePath) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Image download failed: ${response.status}`);
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));
  } catch (err) {
    console.log(`❌ Failed to download image from "${url}":`, err.message);
  }
}

/**
 * Основной запуск
 */
async function run() {
  for (const movie of movies) {
    try {
      console.log(`🔍 Searching poster for: ${movie.title}`);
      const result = await searchMovie(movie.title);
      if (!result || !result.poster_path) {
        console.warn(`⚠️ Poster not found: ${movie.title}`);
        continue;
      }
      const posterUrl = `${IMAGE_BASE_URL}${result.poster_path}`;
      const filePath = path.join(__dirname, `${movie.id}.jpg`);
      await downloadImage(posterUrl, filePath);
      console.log(`✅ Saved: ${movie.id}.jpg`);
    } catch (err) {
      console.log(err);
      console.log(`❌ Error for "${movie.title}":`, err.message);
    }
  }
}

run();
