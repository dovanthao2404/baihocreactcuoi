import React, { Component } from 'react'
import Movie from './Movie/Movie'
import Loading from "./../../../components/Loading/Loading"
import { connect } from 'react-redux'
import * as Actions from "./module/actions"

class ListMoviePage extends Component {

  componentDidMount = async () => {
    this.props.fetchListMovie()
  }

  renderListMovie = () => {
    const { listMovie, isLoading } = this.props.listMovieReducer
    if (isLoading !== true && listMovie !== null) {
      return listMovie.map((movie, key) => {
        return <Movie key={key} movie={movie} />
      })
    } else if (isLoading === true) {

      return <Loading />
    }
    return <h1>Loi</h1>
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          {this.renderListMovie()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    listMovieReducer: state.listMovieReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListMovie: function () {
      dispatch(Actions.actFetchListApi())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage)