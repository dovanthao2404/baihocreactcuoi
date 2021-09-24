import React from "react"
export default class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="https://i.pinimg.com/originals/5f/53/5a/5f535aa08b3230f893f2a68e74eebf44.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: 150, height: 150 }} />
    );
  }
}

