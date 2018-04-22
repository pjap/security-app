console.log('controllers ABSEN TRANSAKSI\n');

const AbsenModel = require('../models/AbsenTransaction');

class Absen {
  constructor() {

  }

  static findAllAbsen(req, res) {
    AbsenModel.find({}).populate({ path: 'karyawan', select: 'nrp nama', populate: { path: 'mitra', select: 'nama', populate: { path: 'listGI', select: 'namaGi'}}}).
    populate({ path: 'shift', select: 'namaShift jamMasuk jamPulang'})
    .then(dataAbsen => {
      res.send(dataAbsen)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createAbsen(req, res) {
    AbsenModel.create({
      karyawan: req.body.karyawan,
      shift: req.body.shift,
      jamMasuk: req.body.jamMasuk,
      jamPulang: req.body.jamPulang
    })
    .then(dataAbsen => {
      res.send(dataAbsen)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateAbsen(req, res) {
    AbsenModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        karyawan: req.body.karyawan,
        shift: req.body.shift,
        jamMasuk: req.body.jamMasuk,
        jamPulang: req.body.jamPulang,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataAbsen => {
      res.send(dataAbsen)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteAbsen(req, res) {
    AbsenModel.findOneAndRemove({ _id: req.params.id })
    .then(dataAbsen => {
      res.send(dataAbsen)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updatePulangAbsen(req, res) {
    AbsenModel.findOneAndUpdate({ _id: req.params.id }, {
      $addToSet: {
        jamPulang: req.body.jamPulang
      }
    }, { new: true })
    .then(dataAbsen => {
      res.send({
        message: 'Sukses Menambah Absen Pulang',
        result: dataAbsen
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Absen;
