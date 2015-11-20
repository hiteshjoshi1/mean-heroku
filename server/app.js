 var express  = require('express');
                                // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var port     = process.env.PORT || 3000;                // set the port
    var config = require('./config/database');            // load the database config
    var logger = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var path = require('path');
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

var routes = require('./routes/index');
var artists = require('./routes/artists')
var mongoose = require('mongoose');
var http = require('http');

    // configuration ===============================================================
    mongoose.connect(config.mongoUri);     // connect to mongoDB database on modulus.io
 var app  = express();
    app.use(logger('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//  app.use(methodOverride());


    // routes ======================================================================

    app.use('/', routes);

    // listen (start app with node server.js) ======================================
  var server = http.createServer(app);
  server.listen(port);
    console.log("App listening on port " + port);

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    app.set('views', path.join(__dirname, 'public'));
   app.use(express.static(path.join(__dirname, 'public')));


    //app.set('view engine','jade');
    // app.use(express.static(path.join(config.root, 'client')));
app.use('/', routes);
app.use('/artists', artists);

// error handlers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


exports = module.exports = app;
