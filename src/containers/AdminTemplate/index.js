import React from 'react'
import { Route } from 'react-router'
import Navbar from "./_components/Navbar/Navbar"

function LayOutAdmin(props) {
  return <>
    <Navbar />
    {props.children}
  </>


}
export default function AdminTemplate({ Component, ...props }) {
  return <Route {...props} render={(propsRoute) => {
    return (
      <LayOutAdmin>
        <Component {...propsRoute} />
      </LayOutAdmin>
    )
  }} />
}
