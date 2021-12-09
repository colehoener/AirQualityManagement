import React, { useEffect, useRef } from 'react';
import Node from './Node';

class Grid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedSensor: 1,
      nodes: null
    }
  }
  
  componentDidMount() {
    this.setState({nodes: this.props.nodes})
  }

  render() {
    //Sensor coordinates
    const SENSORS = [{"sensorid":"Sensor0","latitude":"-8.15758888291083","longitude":"-34.7692487876719"},{"sensorid":"Sensor1","latitude":"-30.0647387677174","longitude":"-76.3439147576429"},{"sensorid":"Sensor2","latitude":"38.9221784071634","longitude":"-89.2363721594384"},{"sensorid":"Sensor3","latitude":"-5.92154786033628","longitude":"75.2608366614491"},{"sensorid":"Sensor4","latitude":"-10.0514503172838","longitude":"87.5506518210986"},{"sensorid":"Sensor5","latitude":"11.8876924118435","longitude":"67.0476760328969"},{"sensorid":"Sensor6","latitude":"-23.6333200096308","longitude":"-71.2536555348214"},{"sensorid":"Sensor7","latitude":"16.3216940040335","longitude":"-86.1531723924694"},{"sensorid":"Sensor8","latitude":"-4.1832184228968","longitude":"52.6153151610006"},{"sensorid":"Sensor9","latitude":"36.2756694672982","longitude":"1.33005024461543"}]
    if(SENSORS != null){
    return (
      <>
        <div id="gridLayout">
          {SENSORS.map(sensor => (
            <Node x={parseInt(sensor.longitude)} y={parseInt(sensor.latitude)} sensorID={sensor.sensorid} startDate={this.props.startDate} endDate={this.props.endDate} handleSelectedNode={this.props.parentHandleSelectedNode} key={sensor} />
          ))}
        </div>
      </>
    )
          }
          else{
            return (
              <>
              <div id="gridLayout"></div>
              </>
            )
          }
  }
}

export default (Grid)