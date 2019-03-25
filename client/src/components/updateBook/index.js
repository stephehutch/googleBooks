import React, { Component } from "react";
//import {Link} from 'react-router-dom';
import API from "../../utils/API";
//import { read } from "fs";



export default class UpdateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {book: {}};
       }
    
    componentDidMount() {
        API.getOneBook(this.props.match.params.id)
        .then(res => {
            this.setState({books: res.data});
        }).catch( error => console.log(error))
    }
    componentDidUpdate() {
        API.getOneBook(this.props.match.params.id)
        .then(res => {
            this.setState({books: res.data});
        }).catch( error => console.log(error))
        }


      render(props) {
        return (
          <div className="book-display">
             <div className="book-card">
                    <div className={
                        this.state.book.book_read ?
                        "card text-white bg-success"
                        : "card text-white bg-secondary"
                    } > 
                        <div className="row">
                            <div className="col-3">
                                <img className="card-img-top" src={this.state.book.book_image}
                                    alt={this.state.book.book_title} />
                            </div>
                            <div className="col-9">
                                <div className="card-body">
                                    <h4>{this.state.book.book_title} {this.state.book.book_author}</h4>
                                    <p className="card-text"> {this.state.book.book_description}</p>
                                </div>
                               <button 
                               className="btn btn-outline-success" 
                               data = {this.state.book.book_id}
                               data-read = {this.state.book.book_read}
                               type="button"
                               >Mark as Read</button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        );
      }
    }
    
    