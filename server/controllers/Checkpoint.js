console.log('controllers CHECKPOINT\n');

const CheckpointModel = require('../models/Checkpoint');

class Checkpoint {
  constructor() {

  }

  static findAllCheckpoint(req, res) {
    CheckpointModel.find({})
    .then(dataCheckpoint => {
      res.send(dataCheckpoint)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createCheckpoint(req, res) {
    CheckpointModel.create({
      kodeUnik: req.body.kodeUnik,
      namaCheckpoint: req.body.namaCheckpoint,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      qrcode: req.body.qrcode
    })
    .then(dataCheckpoint => {
      res.send(dataCheckpoint)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateCheckpoint(req, res) {
    CheckpointModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        kodeUnik: req.body.kodeUnik,
        namaCheckpoint: req.body.namaCheckpoint,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        qrcode: req.body.qrcode,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataCheckpoint => {
      res.send(dataCheckpoint)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteCheckpoint(req, res) {
    CheckpointModel.findOneAndRemove({ _id: req.params.id })
    .then(dataCheckpoint => {
      res.send({
        message: 'Data Berhasil Di Hapus',
        data: dataCheckpoint
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = Checkpoint;
