import React, { Component } from "react";

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
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
                        <div key={this.props.SO2mean}>
                        {'SO2: ' +  parseFloat(((this.props.SO2mean)[0].mean)).toFixed(5)}
                        </div>
                        <div key={this.props.O3mean}>
                        {'O3: ' +  parseFloat(((this.props.O3mean)[0].mean)).toFixed(5)}
                        </div>
                        <div key={this.props.PM10mean}>
                        {'PM10: ' +  parseFloat(((this.props.PM10mean)[0].mean)).toFixed(5)}
                        </div>
                        <div key={this.props.NO2mean}>
                        {'NO2: ' + parseFloat(( (this.props.NO2mean)[0].mean)).toFixed(5)}
                        </div>
                    </div>                  
                </div>
            </>
        )
    }
}

export default Summary;