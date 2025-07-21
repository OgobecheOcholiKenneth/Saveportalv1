const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  targetAmount: Number,
  currentAmount: { type: Number, default: 0 },
  deadline: Date,
});

module.exports = mongoose.model('Plan', planSchema);
