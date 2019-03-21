import React, { Component } from "react";
import {Link} from 'react-router-dom';
import API from "../utils/API";


const SavedBook = props => {
    <li className="list-group-item">
        <div className="book-card">
            <div className="card"> 
                <div className="row">
                    <div className="col-3">
                        <img className="card-img-top" src={props.book.book_image}
                            alt={props.book.book_title} />
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                            <h4>{props.book.book_title} {props.book.book_author}</h4>
                            <p className="card-text"> {props.book.book_description}</p>
                        </div>
                        {/* <Link to={`/edit/`+props.book._id}>Update</Link> */}
                    </div>
                </div>
            </div>
        </div>
    </li>
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
savedBookList() {
    return this.state.books.map( function(elem, i) {
        return <SavedBook book={elem} key={i} /> 
    });
}


  render(props) {
    return (
      <div className="book-display">
        <div className="list-overflow-container">
            <ul className="list-group">
            <SavedBook />
            </ul>
        </div>
      </div>
    );
  }
}

