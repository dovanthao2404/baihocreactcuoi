import React, { memo } from 'react'

function Child() {
  console.log("child")
  return (
    <div>
      <h1>Child component</h1>
    </div>
  )
}

export default memo(Child)
