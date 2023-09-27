import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
     <h1>Welcome To ReactJs Application</h1>
    <Link to="/counter">Counter</Link>&nbsp;&nbsp;
    <Link to="/Todolist">Todolist</Link>&nbsp;&nbsp;
    <Link to="/Countries">Countries</Link>&nbsp;&nbsp;
  
    <Outlet></Outlet>
    </div>
  );
}

export default App;
