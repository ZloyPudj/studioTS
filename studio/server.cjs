const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let users = [];
let favorites = {};

const tracks = [
  { id: "1", title: "Song A", artist: "Artist A" },
  { id: "2", title: "Song B", artist: "Artist B" },
  { id: "3", title: "Song C", artist: "Artist C" },
  { id: "4", title: "Song D", artist: "Artist D" }
];

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);

  if (userExists) {
    return res.json({ message: "пользователь уже существует" });
  }

  users.push({ username, password });

  res.json({
    message: "пользователь успешно добавлен",
    user: { username }
  });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.json({
      message: "произошла ошибка при авторизации — неверные данные"
    });
  }

  const token = "fake-jwt-token";

  res.json({
    message: "авторизация прошла успешно",
    token
  });
});

app.get("/api/tracks", (req, res) => {
  res.json(tracks);
});

app.get("/api/favorites", (req, res) => {
  const token = req.headers.authorization;

  const fav = favorites[token] || [];

  res.json(fav);
});

app.post("/api/favorites", (req, res) => {
  const token = req.headers.authorization;
  const { trackId } = req.body;

  const track = tracks.find(t => t.id === trackId);

  if (!favorites[token]) {
    favorites[token] = [];
  }

  const already = favorites[token].find(t => t.id === trackId);

  if (!already && track) {
    favorites[token].push(track);
  }

  res.json({ message: "композиция добавлена в избранное" });
});

app.delete("/api/favorites", (req, res) => {
  const token = req.headers.authorization;
  const { trackId } = req.body;

  if (!favorites[token]) {
    return res.json({ message: "ничего нет" });
  }

  favorites[token] = favorites[token].filter(t => t.id !== trackId);

  res.json({ message: "композиция убрана из избранного" });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});