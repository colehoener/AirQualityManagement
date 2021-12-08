import React, { Component } from "react";

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gridSize: props.gridSize };
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div className="nodeTitle">
                    {'Summary'}
                </div>
                <div className="nodeInfoFlexContainer">
                    <div className="nodeTimedInfoFlexContainer">
                        <div style={{fontWeight: 'bold'}}>
                        {'Mean'}
                        </div>
                        <div>
                        {'SO2: ' + this.props.SO2mean}
                        </div>
                        <div>
                        {'O3: ' + this.props.O3mean}
                        </div>
                        <div>
                        {'PM10: ' + this.props.PM10mean}
                        </div>
                        <div>
                        {'NO2: ' + this.props.NO2mean}
                        </div>
                    </div>
                    <div className="nodeTimedInfoFlexContainer">
                    <div style={{fontWeight: 'bold'}}>
                        {'Median'}
                        </div>
                        <div>
                        {'SO2: ' + this.props.SO2med}
                        </div>
                        <div>
                        {'O3: ' + this.props.O3med}
                        </div>
                        <div>
                        {'PM10: ' + this.props.PM10med}
                        </div>
                        <div>
                        {'NO2: ' + this.props.NO2med}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Summary;