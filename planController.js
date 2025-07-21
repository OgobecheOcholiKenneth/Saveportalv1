const Plan = require('../models/Plan');

const createPlan = async (req, res) => {
  const plan = new Plan(req.body);
  try {
    await plan.save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ userId: req.params.userId });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createPlan, getUserPlans };
