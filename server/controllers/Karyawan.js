console.log('model KARYAWAN\n');

const KaryawanModel = require('../models/Karyawan');

class Karyawan {
  constructor() {

  }

  static findAllKaryawan(req,res) {
    KaryawanModel.find({}).populate({ path: 'mitra', populate: { path: 'listGI', populate: { path: 'checkpoint'}}})
    .then(dataKaryawan => {
      res.send(dataKaryawan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createKaryawan(req, res) {
    KaryawanModel.create({

      // Profile
      nama: req.body.nama,
      nrp: req.body.nrp,
      noKtp: req.body.noKtp,
      noBpjsKetenagakerjaan: req.body.noBpjsKetenagakerjaan,
      namaAsuransi: req.body.namaAsuransi,
      nomorAsuransi: req.body.nomorAsuransi,
      tempatLahir: req.body.tempatLahir,
      tanggalLahir: req.body.tanggalLahir,
      umur: req.body.umur,
      beratBadan: req.body.beratBadan,
      tinggiBadan: req.body.tinggiBadan,
      ukuranBaju: req.body.ukuranBaju,
      ukuranCelana: req.body.ukuranCelana,
      ukuranSepatu: req.body.ukuranSepatu,
      alamat: req.body.alamat,
      uploadFoto: req.body.uploadFoto,
      dataKeluarga: [
        {
          jenisKeluarga: req.body.jenisKeluarga
        },
        {
          namaKeluarga: req.body.namaKeluarga
        }
      ],
      dataPendidikan: [
        {
          jenisPendidikan: req.body.jenisPendidikan
        },
        {
          namaPendidikan: req.body.namaPendidikan
        },
        {
          namaJurusan: req.body.namaJurusan
        },
        {
          tahunPendidikan: req.body.tahunPendidikan
        }
      ],

      // Company
      statusKaryawan: req.body.statusKaryawan,
      jabatan: req.body.jabatan,
      noKta: req.body.noKta,
      noMasaAktifKta: req.body.noMasaAktifKta,
      sertifikasi: req.body.sertifikasi,
      mitra: req.body.mitra,
      gi: req.body.gi,
      cuti: req.body.cuti,
      tanggalMasuk: req.body.tanggalMasuk,
      tanggalKeluar: req.body.tanggalKeluar,
      recordTeguran: req.body.recordTeguran,

      // Keuangan
      gajiPokok: req.body.gajiPokok,
      asuransiKesehatan: req.body.asuransiKesehatan,
      perAsuransiKesehatan: req.body.perAsuransiKesehatan,
      bpjsKetenagakerjaan: req.body.bpjsKetenagakerjaan,
      perBpjsKetenagakerjaan: req.body.perBpjsKetenagakerjaan,
      transport: req.body.transport,
      tunjangan: req.body.tunjangan,
      uangMakan: req.body.uangMakan,
      namaBank: req.body.namaBank,
      noRekening: req.body.noRekening
    })
    .then(dataKaryawan => {
      res.send(dataKaryawan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateKaryawan(req, res) {
    KaryawanModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        // Profile
        nama: req.body.nama,
        nrp: req.body.nrp,
        noKtp: req.body.noKtp,
        noBpjsKetenagakerjaan: req.body.noBpjsKetenagakerjaan,
        namaAsuransi: req.body.namaAsuransi,
        nomorAsuransi: req.body.nomorAsuransi,
        tempatLahir: req.body.tempatLahir,
        tanggalLahir: req.body.tanggalLahir,
        umur: req.body.umur,
        beratBadan: req.body.beratBadan,
        tinggiBadan: req.body.tinggiBadan,
        ukuranBaju: req.body.ukuranBaju,
        ukuranCelana: req.body.ukuranCelana,
        ukuranSepatu: req.body.ukuranSepatu,
        alamat: req.body.alamat,
        uploadFoto: req.body.uploadFoto,
        dataKeluarga: [
          {
            jenisKeluarga: req.body.jenisKeluarga
          },
          {
            namaKeluarga: req.body.namaKeluarga
          }
        ],
        dataPendidikan: [
          {
            jenisPendidikan: req.body.jenisPendidikan
          },
          {
            namaPendidikan: req.body.namaPendidikan
          },
          {
            namaJurusan: req.body.namaJurusan
          },
          {
            tahunPendidikan: req.body.tahunPendidikan
          }
        ],

        // Company
        statusKaryawan: req.body.statusKaryawan,
        jabatan: req.body.jabatan,
        noKta: req.body.noKta,
        noMasaAktifKta: req.body.noMasaAktifKta,
        sertifikasi: req.body.sertifikasi,
        mitra: req.body.mitra,
        gi: req.body.gi,
        cuti: req.body.cuti,
        tanggalMasuk: req.body.tanggalMasuk,
        tanggalKeluar: req.body.tanggalKeluar,
        recordTeguran: req.body.recordTeguran,

        // Keuangan
        gajiPokok: req.body.gajiPokok,
        asuransiKesehatan: req.body.asuransiKesehatan,
        perAsuransiKesehatan: req.body.perAsuransiKesehatan,
        bpjsKetenagakerjaan: req.body.bpjsKetenagakerjaan,
        perBpjsKetenagakerjaan: req.body.perBpjsKetenagakerjaan,
        transport: req.body.transport,
        tunjangan: req.body.tunjangan,
        uangMakan: req.body.uangMakan,
        namaBank: req.body.namaBank,
        noRekening: req.body.noRekening,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataKaryawan => {
      res.send(dataKaryawan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteKaryawan(req, res) {
    KaryawanModel.findOneAndRemove({ _id: req.params.id })
    .then(dataKaryawan => {
      res.send(dataKaryawan)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static searchKaryawan(req, res) {
    KaryawanModel.find().where('jabatan').equals(req.params.search).limit(5).
    select('nama nrp')
    .then(dataKaryawan => {
      res.send(dataKaryawan)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Karyawan;
