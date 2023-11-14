import logo from './logo.svg';
import './App.css';
import Counter from './counter';
function App() {
  return (
    <div className="App">
     <Counter i={1} step={5}></Counter>
     <Counter i={3} step={8}></Counter>
    </div>
  );
}

export default App;
