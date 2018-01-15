var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tournamentSchema = new Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    userid: { type: Schema.ObjectId, ref: 'User' }

});

module.exports = mongoose.model('Item', itemSchema);