console.log('controllers KODE DARURAT\n');

const DaruratModel = require('../models/KodeDarurat');

class Darurat {
  constructor() {

  }

  static findAllDarurat(req, res) {
    DaruratModel.find({})
    .then(dataDarurat => {
      res.send(dataDarurat)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createDarurat(req, res) {
    DaruratModel.create({
      kodeDarurat: req.body.kodeDarurat,
      namaDarurat: req.body.namaDarurat
    })
    .then(dataDarurat => {
      res.send(dataDarurat)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateDarurat(req, res) {
    DaruratModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        kodeDarurat: req.body.kodeDarurat,
        namaDarurat: req.body.namaDarurat,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataDarurat => {
      res.send(dataDarurat)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteDarurat(req, res) {
    DaruratModel.findOneAndRemove({ _id: req.params.id })
    .then(dataDarurat => {
      res.send(dataDarurat)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Darurat;
