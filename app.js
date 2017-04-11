var express = require('express');
var app = express();
var getReviews = require('./src/getReviews')
var findRecord = require('./src/findRecord')
app.get('/api/v1/reviews', function (req, res) {
  getReviews().then(function(reviews){
    res.json(reviews);
  }, function(error) {
    res.status(404).json(error);
  })
});

app.get('/api/v1/books/:id', function (req, res) {
  findRecord(req.params.id).then(function(book){
    res.json(book);
  }, function(error) {
    res.json({'error':{'message':error}})
  }).catch()
});


app.listen(3000, function () {
  console.log('starting on 3000')
})
