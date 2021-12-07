import React, { useEffect, useRef } from 'react';
import Node from './Node';

class Grid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0
    }
  }

  componentDidMount() {

  }

  render() {
    //Sensor coordinates
    const SENSORS = [
      [-23.6333200096308, -71.2536555348214],
      [36.2756694672982, 1.33005024461543],
    ];


    return (
      <>
        <div id="gridLayout">
          {SENSORS.map(sensor => (
            <Node x={sensor[0]} y={sensor[1]} key={sensor} />
          ))}
        </div>
      </>
    )
  }
}

export default (Grid)