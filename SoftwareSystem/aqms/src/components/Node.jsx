import React from 'react';

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorID: this.props.sensorID,
      x: this.props.x,
      y: this.props.y,
      SO2: [{"mean": "250"}]
    };
  }

  loadSensorData(){
    this.getMeanSO2Sensor()
    /*this.getMeanO3Sensor()
    this.getMeanPM10Sensor()
    this.getMeanNO2Sensor()*/
}

  getMeanSO2Sensor(){

    try {
        fetch('http://localhost:3001/getMeanSensor?start=' + (this.props.startDate) + 
        "&end=" +  (this.props.endDate)+
        "&attributeID=SO2" + "&sensorID=" +this.props.sensorID)
            .then(response => {
                return response.text();
            })
            .then(data => {
                this.setState({ SO2: JSON.parse(data)});
            });
    }
    catch {
        console.log("Failed to fetch data")
    }
}

getMeanO3Sensor(){
    try {
        fetch('http://localhost:3001/getMeanSensor?start=' + (this.state.startDate) + 
        "&end=" +  (this.state.endDate)+
        "&attributeID=O3" + "&sensorID=" +this.state.sensorID)
            .then(response => {
                return response.text();
            })
            .then(data => {
                this.setState({ O3meanSensor: JSON.parse(data)});
            });
    }
    catch {
        console.log("Failed to fetch data")
    }
}

getMeanPM10Sensor(){
    try {
        fetch('http://localhost:3001/getMeanSensor?start=' + (this.state.startDate) + 
        "&end=" +  (this.state.endDate)+
        "&attributeID=PM10" + "&sensorID=" +this.state.sensorID)
            .then(response => {
                return response.text();
            })
            .then(data => {
                this.setState({ PM10meanSensor: JSON.parse(data)});
            });
    }
    catch {
        console.log("Failed to fetch data")
    }
}

getMeanNO2Sensor(){
    try {
        fetch('http://localhost:3001/getMeanSensor?start=' + (this.state.startDate) + 
        "&end=" +  (this.state.endDate)+
        "&attributeID=NO2" + "&sensorID=" +this.state.sensorID)
            .then(response => {
                return response.text();
            })
            .then(data => {
                this.setState({ NO2meanSensor: JSON.parse(data)});
            });
    }
    catch {
        console.log("Failed to fetch data")
    }
}

  componentDidMount() {
    this.loadSensorData()
   
  }

  onClickNode() {
    console.log("Clicked on node " + this.state.sensorID)
    console.log(this.props.SO2)
    this.props.handleSelectedNode(this.state.sensorID)
  }

  getColor() {
    if((this.state.SO2)[0].mean > 250.0){
      return "red"
    }
    /*
    if((this.state.O3)[0].mean > 150){
      return "red"
    }

    if((this.state.PM10)[0].mean > 50){
      return "red"
    }

    if((this.state.NO2)[0].mean > 300){
      return "red"
    }
*/
    return "#24bf39"
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

    return (
      <>
        <div key={this.props.startDate} style={nodeStyle(this.props.x, this.props.y, this.getColor())} onClick={this.onClickNode.bind(this)}>
        </div>
      </>
    )
  }
}

export default Node;