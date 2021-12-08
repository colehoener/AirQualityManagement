import React from 'react';

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorID: this.props.sensorID
    };
  }

  componentDidMount() {
  }

  onClickNode() {
    console.log("Clicked on node " + this.state.sensorID)
    this.props.handleSelectedNode(this.state.sensorID)
  }

  render() {
    var nodeStyle = (x, y, color) => ({
      left: ((x + 100) / 2.0) + '%',
      bottom: ((y + 100) / 2.0) + '%',
      width: '2%',
      height: '2%',
      background: color,
      position: 'absolute',
      borderRadius: '50%',
      boxShadow: '2px 5px 5px 2px rgba(0,0,0,0.08)'
    });

    function getColor() {
      /*if(this.props.SO2 > 125){
        return "red"
      }

      if(this.props.O3 > 120){
        return "red"
      }

      if(this.props.PM10 > 50){
        return "red"
      }

      if(this.props.PM10 > 200){
        return "red"
      }
*/
      return "#24bf39"
    }

    return (
      <>
        <div style={nodeStyle(this.props.x, this.props.y, getColor())} onClick={this.onClickNode.bind(this)}>
        </div>
      </>
    )
  }
}

export default Node;