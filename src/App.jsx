import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div className="mybox">

      <nav style={{ display: "flex", flexDirection: "row",justifyContent:"space-between" }}>
        <div>
          <h1>App</h1>
        </div>
        <div style={{marginTop:"30px",marginLeft:"100px"}}>
          <Link to="/countries" className='link'>Countries</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/products" className='link'>Products</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/counter" className='link'>Counter</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/todolist" className='link'>todolist</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/addproducts" className='link'>Add products</Link>&nbsp;&nbsp;&nbsp;
        </div>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
