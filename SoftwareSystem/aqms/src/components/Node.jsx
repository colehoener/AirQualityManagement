import React from 'react';

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gridSize: props.gridSize};
  }

  componentDidMount() {
  }

  render() {
    var nodeStyle = (x, y, color) => ({
      left: ((x + 100) / 2.0) + '%',
      bottom: ((y + 100) / 2.0)  + '%',
      width: '2%',
      height: '2%',
      background: color,
      position: 'absolute',
      borderRadius: '50%',
      boxShadow: '2px 5px 5px 2px rgba(0,0,0,0.08)'
    });

    function getColor(){
      return "lightGreen"
    }

    function onClick(){
      console.log("Clicked")
    }

    return (
      <>
        <div style={nodeStyle(this.props.x, this.props.y, getColor())} onClick={onClick}>
        </div>
      </>
    )
  }
}

export default Node;