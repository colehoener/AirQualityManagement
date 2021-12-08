import React, { Component } from "react";

class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gridSize: props.gridSize };
    }

    componentDidMount() {
    }

    render() {

        function convertToTime(value) {
            let hours = (value / 60).toFixed(0)
            let minutes = ((value % 60)).toFixed(0)

            return (("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2))
        }

        return (
            <div className="nodeInfoContainer">
                <div className="nodeTitle">
                    {'Sensor ' + this.props.sensorID}
                </div>
                <div className="nodeInfoFlexContainer">
                    <div className="nodeTimedInfoFlexContainer">
                        <div style={{fontWeight: 'bold'}}>
                        {convertToTime(this.props.startTime)}
                        </div>
                        <div>
                        {'SO2: ' + this.props.SO2start}
                        </div>
                        <div>
                        {'O3: ' + this.props.O3start}
                        </div>
                        <div>
                        {'PM10: ' + this.props.PM10start}
                        </div>
                    </div>
                    <div className="nodeTimedInfoFlexContainer">
                    <div style={{fontWeight: 'bold'}}>
                        {convertToTime(this.props.endTime)}
                        </div>
                        <div>
                        {'SO2: ' + this.props.SO2end}
                        </div>
                        <div>
                        {'O3: ' + this.props.O3end}
                        </div>
                        <div>
                        {'PM10: ' + this.props.PM10end}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Node;