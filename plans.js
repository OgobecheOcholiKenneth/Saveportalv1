const express = require('express');
const { createPlan, getUserPlans } = require('../controllers/planController');
const router = express.Router();

router.post('/', createPlan);
router.get('/:userId', getUserPlans);

module.exports = router;
