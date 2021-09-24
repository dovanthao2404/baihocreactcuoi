import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from '../../../components/Loading/Loading';
import { fetchDetailMovie } from './module/actions';

class DetailsMoviePage extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    if (id) {
      this.props.fetchDetailMovie(id)
    }
  }

  renderLichChieu = () => {
    const { isLoading, detailMovie } = this.props.detailMovie
    return detailMovie?.lichChieu?.map((item, index) => {
      console.log(item.ngayChieuGioChieu)
      return <tr key={item.maLichChieu}>
        <td>{item.thongTinRap.tenCumRap}</td>
        <td>{item.thongTinRap.tenRap}</td>
        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
        <td>
          <a href="#dat-ve" className="btn btn-success">Booking</a>
        </td>
      </tr>
    })
  }

  render() {
    const { isLoading, detailMovie } = this.props.detailMovie
    console.log(detailMovie)
    if (!isLoading) {
      return (
        <div className="container">
          <h3>DetailsPage</h3>
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid" style={{ width: 150, height: 300, objectFit: "cover" }} src={detailMovie?.hinhAnh} alt=""  />
            </div>

            {/* {this.renderDetailMovie()} */}
            <div className="col-md-6">
              <table className="table">
                {/* <thead></thead> */}
                <tbody >
                  <tr>
                    <td>Tên phim</td>
                    <td>{detailMovie?.tenPhim}</td>
                  </tr>
                  <tr>
                    <td>Mô tả</td>
                    <td>{detailMovie?.moTa}</td>
                  </tr>
                </tbody>
              </table>
            </div></div>
          <div className="row">
            <div className="col-md-12">
              <table className='table'>
                <thead>
                  <tr>
                    <td>Cụp rạp</td>
                    <td>Tên rạp</td>
                    <td>Ngày chiếu</td>
                    <td>Giờ chiếu</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.renderLichChieu()
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
    return <div className="container">
      <Loading></Loading >
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    detailMovie: state.detailMovieReducer,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(fetchDetailMovie(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps,)(DetailsMoviePage)
