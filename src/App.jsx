import React from 'react';
import './App.css';
import Child from './child';

function App() {
  var myref = React.useRef()
  var myref2 = React.useRef()
  var myref3 = React.useRef()
  var myref4 = React.useRef()

  React.useEffect(() => {
    myref.current.focus()
  }, [])
  function focusNextbox(e) {
    if (e.key === "Enter") {
      myref2.current.focus()
    }
  }
  function focuschildbox(e){
    if(e.key==="Enter"){
      myref3.current.focus()
    }
  }
  function focuspranentbox(e){
    if(e.key==="Enter"){
      myref4.current.focus()
    }
  }

  return (
    <div className="mybox">
      <h2>Pranent component</h2>
      <input ref={myref} type="text" onKeyUp={(e) => { focusNextbox(e) }} />
      <br />
      <input ref={myref2} type="text" onKeyUp={(e) => { focuschildbox(e) }} />
      <Child ref={myref3} fn1={focuspranentbox}></Child>
      <input ref={myref4} type="text" />
    </div>
  );
}

export default App;
