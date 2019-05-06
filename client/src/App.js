import React from 'react';
import './App.css';
import API from './utils/googleAPI'
import Search from './components/search'
import Book from './components/book';

class App extends React.Component {

  state = {
    search: "",
    bookResults: []
  }

  handleInput = (e) => {
    if(e.keyCode === 13){
      const search = document.getElementById("input").value
      this.setState({ 
        search,
      }, () => {
        this.ApiCall(this.state.search)
      })
      document.getElementById("input").value = ""
    }
  }


  ApiCall = (search) => {
    API.getBook(search).then(res => {
      console.log(res.data)
      const bookResults = []
      for (let i=0; i < res.data.items.length; i ++) {
        const description = res.data.items[i].volumeInfo.description
        const author = res.data.items[i].volumeInfo.authors[0]
        const link = res.data.items[i].volumeInfo.infoLink
        const title = res.data.items[i].volumeInfo.title
        const image = res.data.items[i].volumeInfo.imageLinks && res.data.items[i].volumeInfo.imageLinks.thumbnail
        const book = {
          author,
          link,
          title,
          image,
          description
        }
        bookResults.push(book)
      }
      this.setState({ 
        bookResults
      });
    }).catch(() => {
      this.setState({ 
        title: "NOT AVAILABLE"
      });
    })
  }


  render() {
    return (
      <div className="App">
        <Search 
          handleInput = {this.handleInput}
        />
        <Book 
          bookResults = {this.state.bookResults}
        />
      </div>
    );
  }
}
export default App;
