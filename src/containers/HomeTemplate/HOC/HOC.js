import React from 'react'
import NhanVien from './NhanVien'
import SanPham from './SanPham'
import WidthCard from './WidthCard'
// const WrapperCard = WidthCard(NhanVien);

export default function HOC() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {WidthCard(NhanVien, "NhanVien")()}

        </div>
        <div className="col-6">
          {WidthCard(SanPham, "San pham")()}

        </div>
      </div>
    </div>
  )
}
