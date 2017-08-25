// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Location', new Schema({
    referenceCode: String,
    warehouse: String,
    productType: String,
    width: Float,
    height: Float,
    depth: Float,
    available: Boolean
}));