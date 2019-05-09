import React from 'react';
import API from '../utils/googleAPI'
import Navbar from '../components/navbar'
import Book from '../components/book';
import Intro from '../components/intro';
import Popup from '../components/popup';

class MainPage extends React.Component {

    state = {
      search: '',
      bookResults: [],
      display: 1,
      button: 'SAVE',
      page: '',
      saved: [],
      show: false,
    }

    componentDidMount () {
      this.loadSavedBooks()
     }

     handleShow =() => {
      var element = document.getElementById("saveModal");
      element.classList.remove("hidden");
      this.setState({
        show: true
      })
    }

     handleClose =() => {
        document.body.addEventListener('click', function (){
          var element = document.getElementById("saveModal");
          element.classList.add("hidden");
        }, true); 
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

    loadSavedBooks = () => {
      API.getSavedBooks({})
      .then(res => {
        const saved = []
        for (let i=0; i < res.data.length; i ++) {
          const id = res.data[i].id
          saved.push(id)
        }
        this.setState({ 
          saved,
        })
        console.log(this.state.saved)
      }).catch((err) => {
        console.log(err)
      })
    }
  
    handleSave = (event) => {
      if (this.state.saved.includes(event.target.name)){
        alert("You've already saved this book!")
      } else {
        this.handleShow()
        API.saveBook(this.state.bookResults[event.target.id])
        .then(result =>
          console.log(result))
        .catch(err =>
          console.log(err))
      }
    }
  
    ApiCall = (search) => {
      API.getBook(search).then(res => {
        const bookResults = []
        for (let i=0; i < res.data.items.length; i ++) {
          const description = res.data.items[i].volumeInfo.description
          let author = "Unknown"
          let image = "https://via.placeholder.com/150"
          if (res.data.items[i].volumeInfo.authors) {
            author = res.data.items[i].volumeInfo.authors[0]
          }
          const link = res.data.items[i].volumeInfo.infoLink
          const title = res.data.items[i].volumeInfo.title
          if (res.data.items[i].volumeInfo.imageLinks) {
            image = res.data.items[i].volumeInfo.imageLinks.thumbnail
          }
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
          bookResults,
          display: 0
        });
      }).catch(() => {
        this.setState({ 
          title: "NOT AVAILABLE"
        });
      })
    }
  
  
    render() {
      const display = this.state.display;
      return (
        <div className="App" onClick={this.handleClose}>
        <Navbar 
          handleInput = {this.handleInput}
          page = {this.state.page}
        />
        <Popup 
          show={this.state.show}
        />
        {display ? (
          <Intro/>
        ) : (
          <>
          </>
        )
        }
        <Book 
          bookResults = {this.state.bookResults}
          save = {this.handleSave}
          text={this.state.button}
        />
        </div>
      );
    }
  }
  export default MainPage;