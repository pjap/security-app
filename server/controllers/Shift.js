console.log('controllers SHIFT\n');

const ShiftModel = require('../models/Shift');

class Shift {
  constructor() {

  }

  static findAllShift(req, res) {
    ShiftModel.find({})
    .then(dataShift => {
      res.send(dataShift)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createShift(req, res) {
    ShiftModel.create({
      namaShift: req.body.namaShift,
      jamMasuk: req.body.jamMasuk,
      jamPulang: req.body.jamPulang
    })
    .then(dataShift => {
      res.send(dataShift)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateShift(req, res) {
    ShiftModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        namaShift: req.body.namaShift,
        jamMasuk: req.body.jamMasuk,
        jamPulang: req.body.jamPulang,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataShift => {
      res.send(dataShift)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteShift(req, res) {
    ShiftModel.findOneAndRemove({ _id: req.params.id })
    .then(dataShift => {
      res.send(dataShift)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Shift;
