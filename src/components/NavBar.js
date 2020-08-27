import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    myFunction = (e) =>{
        var elems = document.querySelector(".active");
        if(elems !==null){
         elems.classList.remove("active");
        }
       e.target.className = "active";
      }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">SPACEX</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-md-auto" onClick={(event)=>this.myFunction(event)}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">History <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/address">Address</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
