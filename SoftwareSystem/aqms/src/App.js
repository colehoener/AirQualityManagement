import './App.css';
import Grid from './components/Grid.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Grid of nodes */}
        <div className="gridContainer">
          <div>
            <Grid></Grid>
          </div>
        </div>
        <div className="rightSideContainer">
          {/* Info for one node */}
          <div className="nodeContainer">
            <div>
              Node Info
            </div>
          </div>
          {/* Aggregated info for all nodes */}
          <div className="nodeInfoContainer">
            <div>
              Content goes here
            </div>
          </div>
          {/* Slider */}
          <div className="nodeContainer">
            <div>
              Slider
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
