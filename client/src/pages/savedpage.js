import React, { Component} from 'react';
import API from '../utils/googleAPI';
import Book from '../components/book'
import Navbar from '../components/navbar'


class Saved extends Component {

    state = {
      savedBooks: [],
      button: 'DELETE',
      page: 'True'
    };

    componentDidMount () {
        this.loadSavedBooks()
       }

    loadSavedBooks = () => {
      API.getSavedBooks({})
      .then(res => {
        console.log(res.data.length)
        const savedBooks = []
        for (let i=0; i < res.data.length; i ++) {
          const description = res.data[i].description
          const author =res.data[i].author
          const link = res.data[i].link
          const title = res.data[i].title
          const image = res.data[i].image
          const id = res.data[i]._id
          const key = i
          const book = {
            author,
            link,
            title,
            image,
            description,
            id,
            key
          }
          savedBooks.push(book)
        }
        this.setState({ 
          savedBooks
        });
      }).catch(() => {
        this.setState({ 
          title: "NOT AVAILABLE"
        });
      })
    }

    handleDelete = (event) => {
      API.removeSavedBook(event.target.name)
      .then(result =>
        this.loadSavedBooks())
      .catch(err =>
        console.log(err))
    }


  render() {
      return (
        <div className="App">
          <Navbar
           page={this.state.page}
          />
          <Book 
            bookResults = {this.state.savedBooks}
            save = {this.handleDelete}
            text = {this.state.button}
          />
        </div>
      );
    }
  }

export default Saved