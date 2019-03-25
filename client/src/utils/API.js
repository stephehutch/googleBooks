import axios from "axios";

export default {
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("http://localhost:3002/books/");
  },
  getOneBook: function(id) {
    return axios.get(id, "http://localhost:3002/books/");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("http://localhost:3002/books/deleate" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("http://localhost:3002/books/add", bookData);
  },
  UpdateBook: function(bookID, bookData){
   return axios.post("http://localhost:3002/books/update"+ bookID,  bookData)
  }
    
};

