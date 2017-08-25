// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Accounts', new Schema({ 
    owner: String,
    name: String,
    creationDate: { type: Date, default: Date.now },
    active: Boolean,
    contactMails: [String],
    contactPhones: [String]
}));