const db = require('../config/dbconfig.js');

//insertion

exports.addBook = (request, response) => {
    console.log(request.body);
    db.insert(
      {
        table: 'books',
        records: [
          {
            title: request.body.title,
            author: request.body.author
          }
        ]
      },
      (err, res) => {
        if (err) response.status(500).json(err);
  
        response.status(res.statusCode).json(res.data);
      }
    );
  };

  //search by author

  exports.getByAuthor = (request, response) => {
    db.searchByValue(
      {
        table: 'books',
        searchAttribute: 'author',
        searchValue: request.body.author,
        attributes: ['*']
      },
      (err, res) => {
        if (err) response.status(500).json(err);
  
        console.log(res);
  
        response.status(res.statusCode).json(res.data);
      }
    );
  };

  //search a id
  exports.getById = (request, response) => {
    db.searchByHash(
      {
        table: 'books',
        hashValues: [request.body.id],
        attributes: ['title', 'author']
      },
      (err, res) => {
        if (err) response.status(500).json(err);
  
        response.status(res.statusCode).json(res.data);
      }
    );
  };

  //delete
  exports.deleteBook = (request, response) => {
    db.delete(
      {
        table: 'books',
        hashValues: [request.body.id]
      },
      (err, res) => {
        if (err) response.status(500).json(err);
  
        response.status(res.statusCode).json(res);
      }
    );
  };