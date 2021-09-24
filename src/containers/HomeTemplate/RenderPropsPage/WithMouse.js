import React from 'react'
import { Mouse } from './Mouse'
export default function WithMouse(Component) {
  return function () {
    return (
      <>
        <Mouse render={(mouse) => {
          return <Component mouse={mouse} />
        }} />
      </>
    )
  }
}
