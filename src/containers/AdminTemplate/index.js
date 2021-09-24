import React from 'react'
import { Route } from 'react-router'
import Navbar from "./_components/Navbar/Navbar"

function LayOutAdmin(props) {
  return <>
    <Navbar />
    {props.children}
  </>


}
export default function AdminTemplate(props) {
  const { exact, path, component } = props
  return (
    <>
      <LayOutAdmin>
        <Route exact={exact} path={path} component={component} />
      </LayOutAdmin>
    </>
  )
}
