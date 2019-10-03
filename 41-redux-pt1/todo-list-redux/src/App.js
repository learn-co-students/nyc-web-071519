import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './containers/Todo'
import Completed from './containers/Completed';

function App() {
  return (
    <div className="App" >
      <Todo />
      {/* <Completed list={this.state.completed} /> */}
    </div>
  );
}

export default App;
