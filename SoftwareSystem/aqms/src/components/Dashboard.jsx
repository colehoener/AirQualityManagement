import React from "react";
import Grid from './Grid.jsx'
import SliderComp from './SliderComp.jsx'
import NodeInfo from './NodeInfo'
import Summary from './Summary';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date()
        this.state = {
            startDate: "Feb-19-2017",
            endDate: "Nov-11-2017",
            timeValues: [50, 315],
            selectedNode: "Sensor1",
            nodes: null,
            SO2mean: [{"mean": "Loading"}],
            O3mean: [{"mean": "Loading"}],
            PM10mean: [{"mean": "Loading"}],
            NO2mean: [{"mean": "Loading"}],
            SO2meanSensor: [{"mean": "Loading"}],
            O3meanSensor: [{"mean": "Loading"}],
            PM10meanSensor: [{"mean": "Loading"}],
            NO2meanSensor: [{"mean": "Loading"}],
        };
    }

    handleSliderUpdate = (childData) => {
        this.setState({ timeValues: childData })
        this.setState({ startDate: this.convertToDate(childData[0]) })
        this.setState({ endDate: this.convertToDate(childData[1]) })
        console.log(this.state.timeValues)
        this.loadSummaryData()
        this.loadSensorData()
    }

    handleSelectedNode = (childData) => {
        this.setState({ selectedNode: childData })
        console.log("Selected node in dashboard is: " + this.state.selectedNode)
        this.loadSensorData()
    }

    componentDidMount() {

        //this.getNodes()
        this.loadSummaryData()
        this.loadSensorData()
    }

    loadSummaryData(){
        this.getMeanSO2()
        this.getMeanO3()
        this.getMeanPM10()
        this.getMeanNO2()
    }

    loadSensorData(){
        this.getMeanSO2Sensor()
        this.getMeanO3Sensor()
        this.getMeanPM10Sensor()
        this.getMeanNO2Sensor()
    }
    getNodes() {

        try {
            fetch('http://localhost:3001/getSensorLocation')
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    console.log(typeof(data))
                this.setState({ nodes: JSON.stringify(data)});
                });
        }
        catch {
            console.log("Failed to fetch data")
        }
    }

    //SENSORS
    getMeanSO2Sensor(){
        try {
            fetch('http://localhost:3001/getMeanSensor?start=' + (this.state.startDate) + 
            "&end=" +  (this.state.endDate)+
            "&attributeID=SO2" + "&sensorID=" +this.state.selectedNode)
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    this.setState({ SO2meanSensor: JSON.parse(data)});
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
            "&attributeID=O3" + "&sensorID=" +this.state.selectedNode)
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
            "&attributeID=PM10" + "&sensorID=" +this.state.selectedNode)
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
            "&attributeID=NO2" + "&sensorID=" +this.state.selectedNode)
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


    //SUMMARY
    getMeanSO2(){
        try {
            fetch('http://localhost:3001/getMean?start=' + (this.state.startDate) + 
            "&end=" +  (this.state.endDate)+
            "&attributeID=SO2")
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    this.setState({ SO2mean: JSON.parse(data)});
                });
        }
        catch {
            console.log("Failed to fetch data")
        }
    }

    getMeanO3(){
        try {
            fetch('http://localhost:3001/getMean?start=' + (this.state.startDate) + 
            "&end=" +  (this.state.endDate)+
            "&attributeID=O3")
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    this.setState({ O3mean: JSON.parse(data)});
                });
        }
        catch {
            console.log("Failed to fetch data")
        }
    }

    getMeanPM10(){
        try {
            fetch('http://localhost:3001/getMean?start=' + (this.state.startDate) + 
            "&end=" +  (this.state.endDate)+
            "&attributeID=PM10")
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    this.setState({ PM10mean: JSON.parse(data)});
                });
        }
        catch {
            console.log("Failed to fetch data")
        }
    }

    getMeanNO2(){
        try {
            fetch('http://localhost:3001/getMean?start=' + (this.state.startDate) + 
            "&end=" +  (this.state.endDate)+
            "&attributeID=NO2")
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    this.setState({ NO2mean: JSON.parse(data)});
                });
        }
        catch {
            console.log("Failed to fetch data")
        }
    }

    convertToDate(day) {
        var date = new Date(2017, 0); // initialize a date in `year-01-01`
        return (((new Date(date.setDate(day))).toDateString()).slice(4)).replace(/\s+/g, '-'); // add the number of days 
      }

    render() {
        return (
            <>
                {/* Grid of nodes */}
                <div className="gridContainer">
                    <div key={this.state.timeValues}>
                        <Grid 
                            nodes={this.state.nodes}
                            selectedNodeNO2={this.state.NO2meanSensor}
                            parentHandleSelectedNode={this.handleSelectedNode}
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            ></Grid>
                    </div>
                </div>
                <div className="rightSideContainer">
                    {/* Info for one node */}

                    <NodeInfo
                        sensorID={this.state.selectedNode}
                        startTime={this.state.timeValues[0]}
                        endTime={this.state.timeValues[1]}
                        SO2start={this.state.SO2meanSensor}
                        O3start={this.state.O3meanSensor}
                        PM10start={this.state.PM10meanSensor}
                        NO2start={this.state.NO2meanSensor}></NodeInfo>

                    {/* Aggregated info for all nodes */}
                    <div className="nodeInfoContainer">
                        <Summary
                            SO2mean={this.state.SO2mean}
                            O3mean={this.state.O3mean}
                            PM10mean={this.state.PM10mean}
                            NO2mean={this.state.NO2mean}
                        ></Summary>
                    </div>
                    {/* Slider */}
                    <div className="sliderContainer">
                        <SliderComp parentHandleSliderUpdate={this.handleSliderUpdate} isDate={this.state.isDate}></SliderComp>
                    </div>

                </div>
            </>
        )
    }
}

export default Dashboard;