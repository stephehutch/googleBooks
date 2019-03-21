const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Books = new Schema({
  book_title:{ 
    type: String, 
    required: true 
  },
    book_author: { 
    type: String, 
    required: true 
  },
    book_description: String,
    book_link: String,
    // book_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Books", Books);
