import React, { Component } from "react";



class SearchBar extends Component {
  render(props) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="search-bar">
            <form className="form-inline">
             {this.props.children}
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default SearchBar;
