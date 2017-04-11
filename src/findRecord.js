var mysql = require('mysql');
function findRecord(id) {
  return new Promise((resolve, reject) => {
    var connection = mysql.createConnection({
      host     : 'itp460.usc.edu',
      user     : 'student',
      password : 'ttrojan',
      database : 'itp405-midterm'
    });
    connection.connect();
    connection.query('SELECT books.id as id, books.title, publishers.id as publisher_id, publishers.name, authors.id as author_id, authors.first_name, authors.last_name FROM books natural join publishers natural join authors WHERE books.id = ?;', [id], function (error, book) {
      if (error) {
        reject('SQl Error');
      } else {
        if (book.length<1) {
          reject('Book not found');
        } else {
        book = book[0];
        book_ret = {};
        book_ret.id = book.id;
        book_ret.title = book.title;
        book_ret.author = {'id':book.author_id, 'first_name':book.first_name, 'last_name':book.last_name}
        book_ret.publisher = {'id':book.publisher_id, 'name':book.name}
        book = {}
        book.book = book_ret;
        resolve(book);
      }
      }
    })
  })
}

module.exports = findRecord;
