import logo from './logo.svg';
import React from 'react';
import { useRef } from 'react';
import './App.css';
import Child from './child';

function App() {
  var ref1=React.useRef()
  var ref2=React.useRef()
  var ref3=React.useRef()
  var ref4=React.useRef()
  React.useEffect(() => {
    ref1.current.focus()
  }, [])
  function focusnextbox(e){
    if(e.key==="Enter"){
      ref2.current.focus()
    }
  }
  function focuschildbox(e){
    if(e.key==="Enter"){
      ref3.current.focus()
    }
  }
  function focusparentbox(e){
    if(e.key==="Enter"){
        ref4.current.focus()
    }
}
  return (
    <div className="mybox">
      <h1>App components</h1>
      <input type="text" ref={ref1} onKeyUp={(e)=>focusnextbox(e)}/>
      <br />
      <br />
      <input type="text" ref={ref2} onKeyUp={(e)=>focuschildbox(e)}/>
      <br />
      <br />
      <Child ref={ref3} fn1={focusparentbox}></Child>
      <br />
      <input type="text" ref={ref4}  />
    </div>
  );
}

export default App;
