import logo from './logo.svg';
import './App.css';
import React from 'react';
import Frist from './Hooks';
import { useCallback } from 'react';
function App() {
  var [hook,setHook]=React.useState('')

  var greeting=useCallback(()=>{
    alert(hook)
    
  })
  console.log(hook)
  return (
    <div className="mybox">
      <div>
      <h1>App....</h1>
      <input type="text" id='d1' onChange={(e)=>{setHook(e.target.value)}}/> 
      </div>
      <br />
     <Frist alert={greeting}></Frist>
    </div>
  );
}

export default App;
