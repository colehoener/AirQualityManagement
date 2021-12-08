import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: 40,
        zIndex: 0,
        marginTop: 35,
        backgroundColor: '#F4F4F4',
        borderRadius: 5,
        cursor: 'pointer',
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
    />
  )
}

function convertToTime(value){
  let hours = (value / 60).toFixed(0)
  let minutes = ((value % 60)).toFixed(0)

  return (("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2))
}

export function Handle({
  handle: { id, value, percent },
  getHandleProps
}) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: -15,
        marginTop: 35,
        zIndex: 1,
        width: 40,
        height: 40,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#F4F4F4',
        color: '#fffff',
        fontSize: 30,
        boxShadow: 'inset 0px 0px 10px 5px rgba(0,0,0,0.16)'
      }}
      {...getHandleProps(id)}
    >
      <div style={{ fontFamily: 'Avenir', fontSize: 25, marginTop: -35 }}>
        {convertToTime(value)}
      </div>
    </div>
  )
}

const defaultValues = [350, 1080]

class SliderComp extends Component {
  constructor() {
    super();

    this.state = {
      values: defaultValues.slice()
    };
  }

  onChange = values => {
    this.setState({ values })
    this.props.parentHandleSliderUpdate(values);
  }

  render() {

    const sliderStyle = {  // Give the slider some width
      position: 'relative',
      width: '100%',
      height: 80,
    }

    const railStyle = {
      position: 'absolute',
      width: '105%',
      height: 40,
      marginTop: 35,
      marginLeft: -15,
      borderRadius: 50,
      backgroundColor: '#707070',
      boxShadow: 'inset 0px 2px 10px 5px rgba(0,0,0,0.16)',
    }

    return (
      <Slider
        rootStyle={sliderStyle /* inline styles for the outer div. Can also use className prop. */}
        domain={[0, 1440]}
        values={this.state.values}
        mode={2}
        step={1}
        onChange={this.onChange}
      >

        <div style={railStyle /* Add a rail as a child.  Later we'll make it interactive. */} />
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    );
  }
}

export default SliderComp;
