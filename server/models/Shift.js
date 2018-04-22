console.log('models SHIFT\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let shiftSchema = new Schema({
  namaShift: { type: String },
  jamMasuk: { type: String },
  jamPulang: { type: String }
}, { timestamps: true })

let shift = mongoose.model('shift', shiftSchema)

module.exports = shift;
