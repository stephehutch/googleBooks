import React, { Component } from "react";

class Nav extends Component {
  render(props) {
    return (
      <div className="nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">Google Book Seach</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="google.com">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="google.com">Link</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="google.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="google.com">Action</a>
                <a className="dropdown-item" href="google.com">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="google.com">Something else here</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="google.com">Disabled</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
