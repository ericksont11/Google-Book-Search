import React from 'react';
import API from '../utils/googleAPI'
import Search from '../components/search'
import Navbar from '../components/navbar'
import Book from '../components/book';

class MainPage extends React.Component {

    state = {
      search: "",
      bookResults: [],
      button: 'save',
      saved: ''
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

    handleSave = (event) => {
      console.log(event.target.id)
      API.saveBook(this.state.bookResults[event.target.id])
      .then(result =>
        this.setState({ 
          saved: 'green',
        }),
        console.log(this.state.bookResults[event.target.id]))
      .catch(err =>
        console.log(err))
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
          const id = res.data.items[i].id
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
          bookResults.push(book)
        }
        this.setState({ 
          bookResults
        });
        console.log(bookResults)
      }).catch(() => {
        this.setState({ 
          title: "NOT AVAILABLE"
        });
      })
    }
  
  
    render() {
      return (
        <div className="App">
        <Navbar />
          <Search 
            handleInput = {this.handleInput}
          />
          <Book 
            bookResults = {this.state.bookResults}
            save = {this.handleSave}
            text={this.state.button}
            color={this.state.saved}
          />
        </div>
      );
    }
  }
  export default MainPage;