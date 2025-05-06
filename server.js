const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/status', (req, res) => {
  res.json({ status: 'enabled' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});