const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  type: { type: String, required: true, enum: ['simple', 'doble', 'suite'] },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
  description: { type: String },
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);