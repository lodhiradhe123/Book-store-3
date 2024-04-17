const mongoose = require("mongoose");

const bookModel = new mongoose.Schema({
  bookname: String,
  title: String,
  price: Number,
  description: String,
});

const Books = mongoose.model("book", bookModel);

module.exports = Books;
