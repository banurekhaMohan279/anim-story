import logo from './logo.svg';
import './App.css';
import Info from './info.js';
import Arrow from './arrow.js';

function App() {

  let data = `With just CSS, keyframes
              keyframes - 0% scale(1), 100% scale(4)
              animation: stepsanim 4s steps(4,start)`
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Anim story begins here.
        </p>

      </header>
      <Arrow/>
      <Info data = {data}/>
    </div>
  );
}

export default App;
