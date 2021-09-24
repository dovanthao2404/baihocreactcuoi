import React from 'react'
import MouseWithCat from './MouseWithCat';
import { Mouse } from './Mouse';
import Cat from './Cat';
import WithMouse from './WithMouse';

const Wrapper = WithMouse(Cat)
export default class MouseTracker extends React.Component {

  getXY = (mouse) => {
    return <Cat mouse={mouse} />
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/* <Mouse render={this.getXY} /> */}
        {/* {WithMouse(Cat)()} */}
        <Wrapper />
        {/* <MouseWithCat /> */}
      </div>
    );
  }
}