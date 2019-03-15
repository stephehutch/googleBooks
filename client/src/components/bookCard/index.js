import React, { Component } from "react";


class BookCard extends Component {


  render(props) {
    return (
      <li className="list-group-item">
        <div className="book-card">
          <div className="card"> {this.props.children}
            {/* <img className="card-img-top" src={props.image} alt={props.title}/>
            <div className="card-body">
              <h3>{props.title}</h3> ||
              <h4>{props.auther}</h4>
              <br/>
              <p className="card-text"> {props.snippit}</p> 
            </div> 

            */}
          </div>
          <div className="btn-group" role="group">
       <button onClick={()=>alert("I don't anything yet")}
          type="button" className="btn btn-info">Save</button>
          <button onClick={()=>alert("I don't anything yet")}
          type="button" className="btn btn-danger">Deleate</button>
        </div>  
        </div>
      </li>
    );
  }
}

export default BookCard;
