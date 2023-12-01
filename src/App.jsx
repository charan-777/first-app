import logo from './logo.svg';
import {Outlet} from 'react-router-dom'
import './App.css';
import {Provider} from "react-redux"
import store from './store/store';
import Counter from './components/counter';
import Todolist from "./components/todolist"
function App() {
  return (
    <Provider store={store}>
    <div className="mybox">
      <h1>App</h1>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
    <Outlet></Outlet>
    </Provider>
  );
}

export default App;
