console.log('controllers MITRA\n');

const MitraModel = require('../models/Mitra');

class Mitra {
  constructor() {

  }

  static findAllMitra(req, res) {
    MitraModel.find({}).populate({ path: 'listGI', populate: { path: 'checkpoint'}})
    .then(dataMitra => {
      res.send(dataMitra)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createMitra(req, res) {
    MitraModel.create({
      nama: req.body.nama,
      noTelepon: req.body.noTelepon,
      email: req.body.email,
      alamat: req.body.alamat,
      nilaiKontrak: req.body.nilaiKontrak,
      jangkaWaktuKontrak: req.body.jangkaWaktuKontrak,
      pic: req.body.pic,
      picTelepon: req.body.picTelepon,
      ppn: req.body.ppn,
      pph23: req.body.pph23,
      deskripsi: req.body.deskripsi,
      keterangan: req.body.keterangan,
      listGI: req.body.listGI
    })
    .then(dataMitra => {
      res.send(dataMitra)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateMitra(req, res) {
    MitraModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        nama: req.body.nama,
        noTelepon: req.body.noTelepon,
        email: req.body.email,
        alamat: req.body.alamat,
        nilaiKontrak: req.body.nilaiKontrak,
        jangkaWaktuKontrak: req.body.jangkaWaktuKontrak,
        pic: req.body.pic,
        picTelepon: req.body.picTelepon,
        ppn: req.body.ppn,
        pph23: req.body.pph23,
        deskripsi: req.body.deskripsi,
        keterangan: req.body.keterangan,
        listGI: req.body.listGI,
        updatedAt: new Date()
      }
    }, { new: true})
    .then(dataMitra => {
      res.send({
        msg: 'Data Berhasil Di Updated',
        data: dataMitra
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteMitra(req, res) {
    MitraModel.findOneAndRemove({ _id: req.params.id })
    .then(dataMitra => {
      res.send({
        msg: 'Data Mitra Berhasil Di Hapus',
        data: dataMitra
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = Mitra;
