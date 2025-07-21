const Transaction = require('../models/Transaction');

const deposit = async (req, res) => {
  const txn = new Transaction({ ...req.body, type: 'deposit' });
  try {
    await txn.save();
    res.status(201).json(txn);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const withdraw = async (req, res) => {
  const txn = new Transaction({ ...req.body, type: 'withdraw' });
  try {
    await txn.save();
    res.status(201).json(txn);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTransactions = async (req, res) => {
  try {
    const txns = await Transaction.find({ userId: req.params.userId });
    res.json(txns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { deposit, withdraw, getTransactions };
