import axios from "axios";
require('dotenv').config()


export default {
  getBook: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&"+process.env.REACT_APP_KEY);
  },
  saveBook: function(book) {
    return axios.post('/api/books',book)
  },
  getSavedBooks: function() {
    return axios.get("/api/books")
  },
  removeSavedBook: function(id) {
    return axios.delete(`/api/books/${id}`)
  }
};