var express = require('express');
var router = express.Router();

var artistService = require('../services/artistService');
//var Todo = require('../models/Todo.js');

/* GET Artists listing. */
router.get('/', function(req, res, next) {
artistService.getAll(function(err, artists){
if(err){
  console.log(err);
}
else{
    res.json(artists);
  }
})
});

/* POST /todos */
//   router.post('/', function(req, res, next) {
//   Todo.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
// /* GET /todos/id */
// router.get('/:id', function(req, res, next) {
//   Todo.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
// /* PUT /todos/:id */
// router.put('/:id', function(req, res, next) {
//   Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
// /* DELETE /todos/:id */
// router.delete('/:id', function(req, res, next) {
//   Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
