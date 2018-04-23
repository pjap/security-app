console.log('models CHECKPOINT\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let checkpointSchema = new Schema({
  kodeUnik: { type: String, unique: true },
  namaCheckpoint: { type: String },
  latitude: { type: String },
  longitude: { type: String },
  qrcode: { type: String }
}, { timestamps: true })

let checkpoint = mongoose.model('checkpoint', checkpointSchema)

module.exports = checkpoint;
