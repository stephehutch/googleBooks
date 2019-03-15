import React, { Component } from "react";

class BookDisplay extends Component {
  render(props) {
    return (
      <div className="book-display">
        <div className="list-overflow-container">
            <ul className="list-group"> {this.props.children}</ul>
        </div>
      </div>
    );
  }
}

export default BookDisplay;

