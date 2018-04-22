console.log('models SOS TRANSAKSI\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SosSchema = new Schema({
  kodeDarurat: {
    type: Schema.Types.ObjectId,
    ref: 'darurat',
    required: true
  },
  karyawan: {
    type: Schema.Types.ObjectId,
    ref: 'karyawan',
    required: true
  },
  uploadGambar: { type: String },
  keterangan: { type: String }
}, { timestamps: true })

let sos = mongoose.model('sos', SosSchema)

module.exports = sos;
