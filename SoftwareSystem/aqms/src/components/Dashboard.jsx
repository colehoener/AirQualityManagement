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
            timeSelect: 'Hours',
            startDate: today,
            timeValues: [350, 1080],
            isDate: false,
            selectedNode: 1
        };

        this.changeTimeSelection = this.changeTimeSelection.bind(this);
    }

    handleSliderUpdate = (childData) =>{
        this.setState({timeValues: childData})
        console.log(this.state.timeValues)
    }

    handleSelectedNode = (childData) =>{
        this.setState({selectedNode: childData})
        console.log("Selected node in dashboard is: "+ this.state.selectedNode)
    }

    componentDidMount() {
    
        //console.log(this.getMerchant())
    }

    getMerchant() {
        try {
            fetch('http://localhost:3001/getMean/')
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    console.log(data);
                });
        }
        catch {
            console.log("Failed to fetch data")
        }
    }

    changeTimeSelection() {
        if (this.state.timeSelect == 'Hours') {
            this.setState({ timeSelect: 'Date' })
        }
        else {
            this.setState({ timeSelect: 'Hours' })

        }
    }

    render() {
        return (
            <>
                {/* Grid of nodes */}
                <div className="gridContainer">
                    <div>
                        <Grid nodes={["sensor1"]} parentHandleSelectedNode={this.handleSelectedNode}></Grid>
                    </div>
                </div>
                <div className="rightSideContainer">
                    {/* Info for one node */}

                    <NodeInfo
                        sensorID={this.state.selectedNode}
                        startTime={360}
                        endTime={1350}
                        SO2start={1.4}
                        SO2end={1.2}
                        O3start={0.3}
                        O3end={0.4}
                        PM10start={0.9}
                        PM10end={0.9}
                        NO2start={0.1}
                        NO2end={0.2}></NodeInfo>

                    {/* Aggregated info for all nodes */}
                    <div className="nodeInfoContainer">
                        <Summary
                            SO2mean={1.2}
                            O3mean={1.1}
                            PM10mean={0.9}
                            NO2mean={0.1}
                            SO2med={1.1}
                            O3med={1.0}
                            PM10med={0.6}
                            NO2med={0.1}
                            ></Summary>
                    </div>
                    {/* Slider */}
                    <div className="sliderContainer">
                        <SliderComp parentHandleSliderUpdate = {this.handleSliderUpdate} isDate={this.state.isDate}></SliderComp>
                    </div>
                    <DatePicker selected={this.state.startDate} onChange={(date) => this.setState({ startDate: date })} />
                </div>
            </>
        )
    }
}

export default Dashboard;