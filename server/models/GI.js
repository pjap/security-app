console.log('models GI\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let giSchema = new Schema({
  namaGi: { type: String, unique: true },
  checkpoint: [{
    type: Schema.Types.ObjectId,
    ref: 'checkpoint',
    required: true
  }]
}, { timestamps: true })

let gi = mongoose.model('gi', giSchema)

module.exports = gi;
