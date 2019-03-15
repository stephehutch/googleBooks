import React, { Component } from "react";

class TitleCard extends Component {
  render() {
    return (
      <div className="title-card">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Book Search <i className="fas fa-book"></i></h1>
                <p className="lead">Search for a book</p>
            </div>
        </div>
      </div>
    );
  }
}

export default TitleCard;
