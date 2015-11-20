
var mongoose = require('mongoose');
var Artists = require('../models/artistSchema.js');

exports.getAll =  function(callback){
  Artists.find(function (err, artists) {
    if (err) return callback(err,null);
    else {
          return callback(null,artists);
        }
      });
};
