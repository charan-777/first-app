import Counter from './counter';
import Todolist from './Todolist';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
     <h1>Welcome To ReactJs Application</h1>
    <Link to="/Counter">Counter</Link>&nbsp;&nbsp;
    <Link to="/Todolist">Todolist</Link>&nbsp;&nbsp;
    
    <Outlet></Outlet>
    </div>
  );
}

export default App;
