console.log('controllers GI\n');

const GiModel = require('../models/GI');

class Gi {
  constructor() {

  }

  static findAllGi(req, res) {
    GiModel.find({}).populate('checkpoint')
    .then(dataGi => {
      res.send(dataGi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createGi(req, res) {
    GiModel.create({
      namaGi: req.body.namaGi,
      checkpoint: req.body.checkpoint
    })
    .then(dataGi => {
      res.send(dataGi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateGi(req, res) {
    GiModel.findOneAndUpdate({ _id: req.params.id }, {
      $set: {
        namaGi: req.body.namaGi,
        checkpoint: req.body.checkpoint,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataGi => {
      res.send(dataGi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteGi(req, res) {
    GiModel.findOneAndRemove({ _id: req.params.id })
    .then(dataGi => {
      res.send(dataGi)
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = Gi;
