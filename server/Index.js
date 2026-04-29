const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Temporary memory to store bets
let activeBets = [
  { id: 1, challenger: "Jack", amount: 20, prediction: "Arsenal", status: "OPEN" },
  { id: 2, challenger: "Sarah", amount: 10, prediction: "Draw", status: "OPEN" }
];

// Get all open bets
app.get('/api/bets', (req, res) => {
  res.json(activeBets);
});

// Create a new bet
app.post('/api/bets', (req, res) => {
  const newBet = {
    id: Date.now(),
    challenger: req.body.challenger,
    amount: req.body.amount,
    prediction: req.body.prediction,
    status: "OPEN"
  };
  activeBets.push(newBet);
  res.status(201).json(newBet);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));