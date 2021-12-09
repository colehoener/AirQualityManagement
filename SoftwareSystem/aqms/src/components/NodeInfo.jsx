import React, { Component } from "react";

class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridSize: props.gridSize
        };
    }

    componentDidMount() {
    }

    render() {

        function convertToDate(day) {
            var date = new Date(2017, 0); // initialize a date in `year-01-01`
            return (((new Date(date.setDate(day))).toDateString()).slice(4)).replace(/\s+/g, '-'); // add the number of days 
        }

        return (
            <div className="nodeInfoContainer">
                <div key={this.props.sensorID} className="nodeTitle">
                    {this.props.sensorID}
                </div>
                <div className="nodeInfoFlexContainer">
                    <div className="nodeTimedInfoFlexContainer">
                        <div style={{ fontWeight: 'bold' }}>
                            <div key={this.props.startTime} className="pulseAni">
                                <div key={this.props.endTime} className="pulseAni">
                                    {"Average from " + convertToDate(this.props.startTime) + " to " + convertToDate(this.props.endTime)}
                                </div>
                            </div>
                        </div>
                        <div key={this.props.SO2start}>
                            {'SO2: ' + parseFloat(((this.props.SO2start)[0].mean)).toFixed(5)}
                        </div>
                        <div>
                            {'O3: ' + parseFloat(((this.props.O3start)[0].mean)).toFixed(5)}
                        </div>
                        <div>
                            {'PM10: ' + parseFloat(((this.props.PM10start)[0].mean)).toFixed(5)}
                        </div>
                        <div>
                            {'NO2: ' + parseFloat(((this.props.NO2start)[0].mean)).toFixed(5)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Node;