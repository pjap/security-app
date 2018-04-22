console.log('controllers SOS TRANSAKSI\n');

const SosModel = require('../models/SosTransaction');

class Sos {
  constructor() {

  }

  static findAllSos(req, res) {
    SosModel.find({}).populate({ path: 'karyawan', select: 'nrp nama', populate: { path: 'mitra', select: 'nama', populate: { path: 'listGI', select: 'namaGi'}}}).
    populate({ path: 'kodeDarurat', select: 'kodeDarurat namaDarurat'})
    .then(dataSos => {
      res.send(dataSos)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createSos(req, res) {
    SosModel.create({
      kodeDarurat: req.body.kodeDarurat,
      karyawan: req.body.karyawan,
      uploadGambar: req.body.uploadGambar,
      keterangan: req.body.keterangan
    })
    .then(dataSos => {
      res.send(dataSos)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateSos(req, res) {
    SosModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        kodeDarurat: req.body.kodeDarurat,
        karyawan: req.body.karyawan,
        uploadGambar: req.body.uploadGambar,
        keterangan: req.body.keterangan
      }
    }, { new: true })
    .then(dataSos => {
      res.send(dataSos)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteSos(req, res) {
    SosModel.findOneAndRemove({ _id: req.params.id })
    .then(dataSos => {
      res.send(dataSos)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Sos;
