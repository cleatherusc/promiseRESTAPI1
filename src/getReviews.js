var mysql = require('mysql');
console.log("loaded")
function getReviews() {
  return new Promise(function (resolve, reject) {
    var connection = mysql.createConnection({
      host     : 'itp460.usc.edu',
      user     : 'student',
      password : 'ttrojan',
      database : 'itp405-midterm'
    });
    connection.connect();
    connection.query('select * from reviews', function (error, reviews) {
      if (error) {
        reject();
      } else {
        resolve(reviews);
      }
    })
  })
}

module.exports = getReviews()
