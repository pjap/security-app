console.log('models KODE DARURAT\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let daruratSchema = new Schema({
  kodeDarurat: { type: Number, unique: true },
  namaDarurat: { type: String },
}, { timestamps: true })

let darurat = mongoose.model('darurat', daruratSchema)

module.exports = darurat;
