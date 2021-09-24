import React from 'react'

export default function NhanVien() {
  return (
    <>
      <div className="form-group">
        <label htmlFor="">Ma nv</label>
        <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />
      </div>
      <div className="form-group">
        <label htmlFor="">Ten nv</label>
        <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />

      </div>
      <div className="form-group">
        <label htmlFor="">Email</label>
        <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />

      </div>
    </>
  )
}
