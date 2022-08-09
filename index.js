const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 5000;
//app.get('/', (req, res) => res.json('Express Server'));
const routesController = require('./api/index');
app.route('/books').post(routesController.addBook);
app.route('/author').post(routesController.getByAuthor);
app.route('/search').post(routesController.getById);
app.route('/delete').post(routesController.deleteBook);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});