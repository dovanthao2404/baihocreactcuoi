import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Movie extends Component {
  render() {
    return (
      <div className="col-3" >
        <div className="card">
          <img src={this.props.movie.hinhAnh} alt="" className="card-img-top" />
          <div className="card-body">
            <p>{this.props.movie.tenPhim}</p>
            {/* <p></p> */}
            <Link className="btn btn-success" to={"/detail/" + this.props.movie.maPhim} >Xem</Link>
          </div>
        </div>
      </div>
    )
  }
}
