const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    link: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;