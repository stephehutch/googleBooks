import React, { Component } from "react";


class BookCard extends Component {



  render(props) {
    return (
      <li className="list-group-item">
        <div className="book-card">
          <div className="card"> 
          {this.props.children}
          </div>
        </div>
      </li>
    );
  }
}

export default BookCard;
