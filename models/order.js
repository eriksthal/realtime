// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Order', new Schema({
    owner: String,
    type: String,
    createdBy: String,
    wareHouse: String,
    destinationDetails: Schema.Types.Mixed,
    deliverBy: { type: Date },
    receptionDate: { type: Date },
    creationDate: { type: Date, default: Date.now },
    products: Schema.Types.Mixed,
    document: Schema.Types.Mixed,
    transportationSeal: String,
    reference: String,
    status: String
}));