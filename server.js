const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Mock database for prototype
let bets = [];

// Endpoint to create a P2P bet
app.post('/api/create-bet', (req, res) => {
  const { challenger, eventId, amount, prediction } = req.body;
  const newBet = {
    id: Date.now(),
    challenger,
    opponent: null,
    eventId,
    amount,
    prediction,
    status: 'OPEN' // OPEN, MATCHED, SETTLED
  };
  bets.push(newBet);
  res.status(201).json(newBet);
});

// Endpoint to fetch available challenges
app.get('/api/challenges', (req, res) => {
  res.json(bets.filter(b => b.status === 'OPEN'));
});

app.listen(5000, () => console.log('Backend running on port 5000'));