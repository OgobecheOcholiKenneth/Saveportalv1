const express = require('express');
const { deposit, withdraw, getTransactions } = require('../controllers/transactionController');
const router = express.Router();

router.post('/deposit', deposit);
router.post('/withdraw', withdraw);
router.get('/:userId', getTransactions);

module.exports = router;
