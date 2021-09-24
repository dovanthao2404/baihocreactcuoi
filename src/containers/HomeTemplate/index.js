import React from 'react'
import { Route } from 'react-router';
import Navbar from './_components/Navbar/Navbar';

function LayOutHome(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

function HomeTemplate(props) {
  const { exact, path, component } = props
  return <>
    {/* <Navbar /> */}
    <LayOutHome>
      <Route exact={exact} path={path} component={component} />
    </LayOutHome>
  </>

}

export default HomeTemplate;
