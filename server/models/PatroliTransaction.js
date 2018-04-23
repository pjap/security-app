console.log('models PATROLI TRANSAKSI\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PatroliSchema = new Schema({
  karyawan: {
    type: Schema.Types.ObjectId,
    ref: 'karyawan',
    required: true
  },
  latPatroli: { type: String },
  longPatroli: { type: String },
  pesan: { type: String, default: '- Tidak Ada Pesan -' },
  gambar: { type: String }
}, { timestamps: true })

let patroli = mongoose.model('patroli', PatroliSchema)

module.exports = patroli;
