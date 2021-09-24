import React from 'react'

export default function WidthCard(Component, header) {
  return function () {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            {header}
          </div>
          <div className="card-body">
            <Component />
          </div>

          <div className="card-footer">
            Footer
          </div>
        </div>
      </div>

    )
  }
}
