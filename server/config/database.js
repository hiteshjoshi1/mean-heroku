var path = require('path');
var config = {};
//site is the name of the database
config.mongoUri = "mongodb://localhost:27017/art";
config.root =  path.normalize(__dirname + '/../..')
module.exports=config;
