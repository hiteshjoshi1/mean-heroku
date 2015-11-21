var path = require('path');
// var config = {};
// //site is the name of the database
// config.mongoUri = "mongodb://localhost:27017/art";
// config.root =  path.normalize(__dirname + '/../..')
// module.exports=config;


var mongoProdUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017';
var rootPath =  path.normalize(__dirname + '/../..');
var config = {
	local: {
		mode: 'local',
		port: 3000,
		mongoUri : "mongodb://localhost:27017/art",
    root : rootPath
	},
	staging: {
		mode: 'staging',
		port: 4000,
		mongoUri: 'mongodb://localhost:27017/art_stage',
    root : rootPath
	},
	prod: {
		mode: 'prod',
		port: process.env.PORT || 5000,
		mongoUri: mongoProdUri,
    root : rootPath
	}
};

module.exports = function (mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
};
