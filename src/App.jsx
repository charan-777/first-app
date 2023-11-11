import logo from './logo.svg';
import './App.css';
import Comp from './component';
function App() {
  return (
    <div className="App">
      <Comp  i={10} step={100}></Comp>
      <Comp  i={100} step={40}></Comp>
      <Comp  i={300} step={50}></Comp>
    </div>
  );
}

export default App;
