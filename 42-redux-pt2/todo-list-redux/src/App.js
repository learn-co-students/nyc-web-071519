import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import Todo from './containers/Todo'
import Completed from './containers/Completed';
import { fetchTasks } from './actions'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchTasks()
  }
  render() {
    return (
      <div className="App" >
        <Todo />
        <Completed />
      </div>
    );
  }
}
function mdp(dispatch) {
  // when adding a thunk as an action set key equal to the invoked dispatch function
  // But if the action is not a thunk and rather just a plain object, wrap the dispatch invocation inside of an anon. function
  return { fetchTasks: dispatch(fetchTasks) }
}

export default connect(null, mdp)(App);
