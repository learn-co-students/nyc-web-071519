import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SpyContainer from './containers/SpyContainer'
import CaughtContainer from './containers/CaughtContainer'
import Welcome from './components/Welcome'
import FoOhFo from './components/FoOhFo'

class App extends React.Component {

  state = {
    caughtSpies: []
  }

  componentDidMount() {
    console.log("App Props:", this.props)
    this.props.history.push("/spies")
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
        <Switch>
          <Route path="/spies" render={(routerProps) => {
            console.log("Router Props in Render:", routerProps)
            return <SpyContainer clickHandler={this.clickHandler} />
          }
          }
          />
          <Route path="/caught" render={() => <CaughtContainer spies={this.state.caughtSpies} clickHandler={this.removeClickHandler} />} />
          <Route exact path="/" component={Welcome} />
          <Route component={FoOhFo} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);

