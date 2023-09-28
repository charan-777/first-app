import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Another from './Another';
import './App.css';

function App() {
  var firstnameRef=React.useRef();
  var lastnameRef=React.useRef();
  var addressRef=React.useRef();
  var [x,setX]=useState([])
  function checkit(e){
    if(e.key==="Enter"){
      lastnameRef.current.focus()
    }
  }
  function conform(e){
    var a=+(firstnameRef.current.value)
      var b=+(lastnameRef.current.value)
      setX(a+b)
    if(e.key==="Enter"){
      addressRef.current.focus()
      
      if(!isNaN(a)&&!isNaN(b)){
      addressRef.current.value=x
      }
      else{
        addressRef.current.value="enter a number"
      }
    }
  }
  useEffect(()=>{
    firstnameRef.current.focus();
  },[])
  return (
    <div className="App">
     <input type="text" ref={firstnameRef} onKeyUp={(e)=>{checkit(e)}}/>
     <br />
     <input type="text" ref={lastnameRef} onKeyUp={(e)=>{conform(e)}}/>
     <br />
     <Another ref={addressRef}></Another>
    </div>
  );
}

export default App;
