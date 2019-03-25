import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Nav from "./components/nav";
import BookDisplay from "./components/bookDisplay";
import BookCard from "./components/bookCard";
import SavedBooks from "./components/savedBooks";
import TitleCard from "./components/titleCard";
import SearchBar from "./components/searchBar";
import UpdateBook from "./components/updateBook";
//import book from "./book.json"
import API from "./utils/API";
const Books = [];


class App extends Component {

  state = {
    searchTerm: "Waldo",
    Books: Books,
    showSaved: false
  };

  render() {

    const handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const value = event.target.value;
      const name = event.target.name;


      // Updating the input's state
      this.setState({
        [name]: value
      });
    };


    const handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();

      console.log(`you have searched for ${this.state.searchTerm}`)

      const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`
      //fetch(API + DEFAULT_QUERY)
      fetch(queryURL)
        .then(response => response.json())
        .then(data =>
          [...Books,
          data.items ?
            {
              id: data.items[0].id,
              title: data.items[0].volumeInfo.title,
              image: data.items[0].volumeInfo.imageLinks.smallThumbnail,
              description: data.items[0].volumeInfo.description,
              author: data.items[0].volumeInfo.authors[0],
              link: data.items[0].accessInfo.webReaderLink
            }
            : {
              title: "Book Title",
              image: "https://d3n8a8pro7vhmx.cloudfront.net/sundayassemblyla/pages/2543/attachments/original/1528303608/book.jpg?1528303608",
              description: "This is where a discipton of the book would go. It would tell us about the book.",
              author: "auther"
            }]
        ).then(books => {
          this.setState({
            searchTerm: "",
            Books: books
          })
        })

      console.log(this.state.Books)
    };

    const handleBookSave = () => {
      //id

     //const BookToDate = this.state.Books.find(book => book.id === id);
      const bookToSave = {

        book_title: this.state.Books[0].title,
        book_image: this.state.Books[0].image,
        book_description: this.state.Books[0].description,
        book_author: this.state.Books[0].author,
        book_link: this.state.Books[0].link
      }
      
      this.setState({
        searchTerm: "",
        Books: Books
      })
      API.saveBook(bookToSave).then(//() => this.getBooks()
      res => console.log(res.data)
      );
    };

    const handleShowSave = () => {

      this.setState({
         showSaved: !this.state.showSaved
      })
     
    };


    return (
      <Router>
      <div className="App container">
        {/* <Nav /> */}
        <TitleCard />
        <SearchBar>
          <div className="form-group mb-2">
            <label className="sr-only">Search for a book</label>
            <input type="text" className="form-control-plaintext"
              value={this.state.searchTerm}
              name="searchTerm"
              onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary mb-2" onClick={handleFormSubmit}>Search</button>
          <button type="button" className="btn btn-primary mb-2" onClick={handleShowSave}>Show Saved</button>
        </SearchBar>
        {this.state.Books.length > 0 ? (
          this.state.Books.map(books =>
            <BookDisplay key={books.id} >
              <BookCard >
                <div className="row">
                  <div className="col-3">
                    <img className="card-img-top" src={books.image}
                      alt={books.title} />
                  </div>
                  <div className="col-9">
                    <div className="card-body">
                      <h4>{books.title} {books.author}</h4>
                      <p className="card-text"> {books.description}</p>
                    </div>
                  </div>
                
                </div>
                {/* <DeleteBtn /> */}
              </BookCard>
              <div className="btn-group" role="group">
                  <button onClick={() => handleBookSave(books.id)}
                  type="button" className="btn btn-info">Save</button>
                </div>  
            </BookDisplay>)
        ) : (
            <BookDisplay>
              <BookCard>
                <div className="row">
                  <div className="col">
                    <img className="card-img-top" src="https://d3n8a8pro7vhmx.cloudfront.net/sundayassemblyla/pages/2543/attachments/original/1528303608/book.jpg?1528303608" alt="Starter Book" />
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <h4>Book Title || An Auther</h4>
                      <br />
                      <p className="card-text"> This is where a discipton of the book would go. It would tell us about the book.</p>
                    </div>
                  </div>
                </div>
              </BookCard>
            </BookDisplay>
          )}
          {this.state.showSaved ? 
          <SavedBooks /> :
          <br />
          }
      </div>

    {/* <Route path="/update/:id" component={UpdateBook} /> */}
    </Router>
    );
  }
}

export default App;
