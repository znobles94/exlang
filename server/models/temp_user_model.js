var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var tempUserSchema = mongoose.Schema({
	uname: String,
	upass: String,
	conf_link: String
});

tempUserSchema.methods = {
	
	auth: function(passPlaintext) {
		return !passPlaintext ? '' : bcrypt.compare(passPlaintext, this.upass);
	},
	
	encryptPass: function(passPlaintext) {
		return !passPlaintext ? '' : bcrypt.hash(passPlaintext, 10);
	}

	
};

module.exports = mongoose.model('tempUser', tempUserSchema, 'tempUsers');
