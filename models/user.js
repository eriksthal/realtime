// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
mongoose.set('debug', true)
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('user', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    roles: [String],
    creationDate: { type: Date, default: Date.now },
    active: Boolean,
    accounts: [String]
}));