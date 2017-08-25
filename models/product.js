// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Product', new Schema({
    owner: String,
    type: String,
    name: String,
    description: String,
    expirationDate: { type: Date },
    creationDate: { type: Date, default: Date.now },
    group: String,
    width: Float,
    height: Float,
    depth: Float,
    value: Float,
    weight: Float,
    stockingStrategy: String,
    packingIn: String,
    packingOut: String,
    controlType: String,
    active: Boolean
}));