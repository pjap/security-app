console.log('Models MITRA\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mitraSchema = new Schema({
  nama: { type: String, unique: true },
  noTelepon: { type: Number },
  email: { type: String },
  alamat: { type: String },
  nilaiKontrak: { type: Number },
  jangkaWaktuKontrak: { type: Date, default: Date.now },
  pic: { type: String },
  picTelepon: { type: Number },
  ppn: { type: String },
  pph23: { type: String },
  deskripsi: { type: String },
  keterangan: { type: String },
  listGI: [{
    type: Schema.Types.ObjectId,
    ref: 'gi',
    required: true
  }]
}, { timestamps: true })

let mitra = mongoose.model('mitra', mitraSchema)

module.exports = mitra;
