console.log('controllers PATROLI TRANSAKSI\n');

const PatroliModel = require('../models/PatroliTransaction');

class Patroli {
  constructor() {

  }

  static findAllPatroli(req, res) {
    PatroliModel.find({}).populate({ path: 'karyawan', select: 'nama nrp', populate: { path: 'mitra', select: 'nama', populate: { path: 'listGI', select: 'namaGi', populate: 'checkpoint', select: 'kodeUnik namaCheckpoint latitude longitude qrcode'}}})
    .then(dataPatroli => {
      res.send(dataPatroli)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createPatroli(req, res) {
    PatroliModel.create({
      karyawan: req.body.karyawan,
      latPatroli: req.body.latPatroli,
      longPatroli: req.body.longPatroli,
      pesan: req.body.pesan,
      gambar: req.body.gambar
    })
    .then(dataPatroli => {
      res.send(dataPatroli)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updatePatroli(req, res) {
    PatroliModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        karyawan: req.body.karyawan,
        latPatroli: req.body.latPatroli,
        longPatroli: req.body.longPatroli,
        pesan: req.body.pesan,
        gambar: req.body.gambar
      }
    }, { new: true })
    .then(dataPatroli => {
      res.send(dataPatroli)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deletePatroli(req, res) {
    PatroliModel.findOneAndRemove({ _id: req.params.id })
    .then(dataPatroli => {
      res.send(dataPatroli)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Patroli;
