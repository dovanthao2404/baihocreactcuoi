import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeStyle={{ fontWeight: "bold" }} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ fontWeight: "bold" }} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ fontWeight: "bold" }} to="/list-movie">List movie</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ fontWeight: "bold" }} to="/hoc">Hoc</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ fontWeight: "bold" }} to="/render-props">RenderProp</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li> */}
          </ul>
        </div>
      </nav>

    )
  }
}
