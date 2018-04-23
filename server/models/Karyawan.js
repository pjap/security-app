console.log('Models KARYAWAN\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let karyawanSchema = new Schema({
  // Profile
  nama: { type: String },
  nrp: { type: String, unique: true },
  noKtp: { type: Number },
  noBpjsKetenagakerjaan: { type: Number },
  namaAsuransi: { type: String },
  nomorAsuransi: { type: Number },
  tempatLahir: { type: String },
  tanggalLahir: { type: Date, default: Date.now },
  umur: { type: Number, min: 18, max: 55 },
  beratBadan: { type: Number },
  tinggiBadan: { type: Number },
  ukuranBaju: { type: String },
  ukuranCelana: { type: Number },
  ukuranSepatu: {type: Number },
  alamat: { type: String },
  uploadFoto: { type: String },
  dataKeluarga: [
    {
      jenisKeluarga: { type: String, default: 'Lajang' },
      namaKeluarga: { type: String, default:'Belum Ada' }
    }
  ],
  dataPendidikan: [
    {
      jenisPendidikan: { type: String },
      namaPendidikan: { type: String },
      namaJurusan: { type: String },
      tahunPendidikan: { type: String }
    }
  ],

  // Company
  statusKaryawan: { type: String },
  jabatan: { type: String },
  noKta: { type: String },
  noMasaAktifKta: { type: String },
  sertifikasi: { type: String },
  mitra: {
    type: Schema.Types.ObjectId,
    ref: 'mitra',
    required: true
  },
  // gi: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'gi'
  // },
  cuti: { type: String },
  tanggalMasuk: { type: Date },
  tanggalKeluar: { type: Date },
  recordTeguran: { type: String },

  // Keuangan
  gajiPokok: { type: Number },
  asuransiKesehatan: { type: Number },
  perAsuransiKesehatan: { type: Number },
  bpjsKetenagakerjaan: { type: Number },
  perBpjsKetenagakerjaan: { type: Number },
  transport: { type: Number },
  tunjangan: { type: Number },
  uangMakan: { type: Number },
  namaBank: { type: String },
  noRekening: { type: String }
}, { timestamps: true })

let karyawan = mongoose.model('karyawan', karyawanSchema)

module.exports = karyawan;
