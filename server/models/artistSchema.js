var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var userService = require('../services/userService');

var artistSchema = new Schema({
	name:{type : String, required: 'name is required.'},
	shortname:{type : String, required: 'shortName is required.'},
	reknown:{type : String, required: 'reknown is required.'},
	bio:{type : String, required: 'bio is required.'},
	created: {type:Date, default: Date.now}
});


module.exports = mongoose.model('Artist', artistSchema);
