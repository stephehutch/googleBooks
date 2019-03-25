import React, { Component } from "react";
import {Link} from 'react-router-dom';
import API from "../../utils/API";
//import { read } from "fs";

const Delete = (id) => {
    console.log("book to be deleated:"+ id)
        API.deleteBook(id).then(
        res => console.log(res.data)
        );
     
}

export default class SavedBooks extends Component {
constructor(props) {
    super(props);
    this.state = {books: []};
   }

componentDidMount() {
    API.getSavedBooks().then(res => {
        this.setState({books: res.data});
    }).catch( error => console.log(error))
}

componentDidUpdate() {
    API.getSavedBooks().then(res => {
        this.setState({books: res.data});
    }).catch( error => console.log(error))   
}



savedBookList() {

   return this.state.books.map( function(book, i) {
        return (
            <li className="list-group-item" key={i}>
            <div className="book-card">
                <div 
                className="card bg-light"
              
                     > 
                    <div className="row">
                        <div className="col-3">
                            <img className="card-img-top" src={book.book_image}
                                alt={book.book_title} />
                        </div>
                        <div className="col-9">
                            <div className="card-body">
                                <h4>{book.book_title} {book.book_author}</h4>
                                <p className="card-text"> {book.book_description}</p>
                            </div>
                           <button 
                           className="btn btn-light" 
                           data = {book.id}
                        
                           type="button"
                           onClick={() => Delete (book._id)}
                           ><Link to={"/update/"+book._id}> Remove from List</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        ) 
    });
}


  render(props) {
    return (
      <div className="book-display">
        <div className="list-overflow-container">
            <ul className="list-group">
            {this.savedBookList()}
            </ul>
        </div>
      </div>
    );
  }
}

// book.book_read ?
// "card text-white bg-success"
// : "card text-white bg-secondary"