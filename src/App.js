import TileBoard from './components/Tileboard';

import './App.css';

/*
  -Components
    -Each tile will need to be it's own component
  -Functionality
    -Each tile will need to have a mouseEnter event and a mouseLeave event
    -mouseEnter event:
      -A random color will need to be selected and fill in the background of the tile
    -mouseLeave event:
      -Color will need to fade back to the original color of the tile after a couple of seconds (maybe 3 seconds)
*/

function App() {

  const squareCount = 500;


  return (
    <div className="App">
      <TileBoard squares={squareCount}/>
    </div>
  );
}

export default App;
