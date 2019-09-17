import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpyContainer from './SpyContainer'
import CaughtContainer from './CaughtContainer'

class App extends React.Component {

  state = {
    caughtSpies: []
  }

  clickHandler = (spy) => {

    this.setState({
      caughtSpies: [...this.state.caughtSpies, spy]
    })
  }

  removeClickHandler = (spy) => {
    let newArray = this.state.caughtSpies.filter(spyObj => spyObj.id != spy.id)
    console.log("removing stuff", newArray)
    this.setState({
      caughtSpies: newArray
    })
  }

  render() {
    console.log("state:", this.state.caughtSpies)
    return (
      <div id="whatever whatever">
        <SpyContainer clickHandler={this.clickHandler} />
        <CaughtContainer spies={this.state.caughtSpies} clickHandler={this.removeClickHandler} />
      </div>
    );
  }
}

export default App;

