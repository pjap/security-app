console.log('models ABSEN TRANSAKSI\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let absenSchema = new Schema({
  karyawan: {
    type: Schema.Types.ObjectId,
    ref: 'karyawan',
    required: true
  },
  shift: {
    type: Schema.Types.ObjectId,
    ref: 'shift',
    required: true
  },
  jamMasuk: { type: Date, default: Date.now },
  jamPulang: { type: Date }
}, { timestamps: true })

let absen = mongoose.model('absen', absenSchema)

module.exports = absen;
