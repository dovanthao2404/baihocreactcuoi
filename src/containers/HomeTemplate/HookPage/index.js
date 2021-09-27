import React, { useCallback, useEffect, useState } from 'react'
import Child from './child'
import Custom from './CustomHook'

export default function HookPage() {
  let [number, setNumber] = useState(0)
  useEffect(() => {
    console.log("useEffect")
  }, [])

  const showNumber = () => {
    console.log("a")
  }

  const showNumberCallback = useCallback(
    showNumber
    ,
    [],
  )

  return (
    <div>
      <h1>hook</h1>
      <h1>number: {number}</h1>
      <button className="btn btn-success" onClick={() => {
        setNumber(number + 1);
      }}>increase</button>
      <button className="btn btn-warning" onClick={() => {
        setNumber(0);
      }}>increase</button>
      <Child showNumber={showNumberCallback} />
      <Custom />
    </div>

  )
}
