const mongoose = require("mongoose");

const bookModel = new mongoose.Schema({
  bookname: String,
  title: String,
  price: Number,
  discription: String,
});

const Books = mongoose.model("book", bookModel);

module.exports = Books;
