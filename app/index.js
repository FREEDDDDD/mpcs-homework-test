const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ status: 'OK', message: 'System Operational' }));

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  if (isNaN(sum)) return res.status(400).json({ error: 'Invalid numbers' });
  res.json({ result: sum });
});

if (require.main === module) {
  app.listen(port, () => console.log(`App listening on port ${port}`));
}

module.exports = app;

