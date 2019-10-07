import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SpyContainer from './containers/SpyContainer'
import CaughtContainer from './containers/CaughtContainer'
import Welcome from './components/Welcome'
import FoOhFo from './components/FoOhFo'
import Signup from './components/Signup'
import Login from './components/Login'

class App extends React.Component {

  state = {
    caughtSpies: [],
    user: null
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
      //find the path the user was at prior to getting to the app component
      let targetPath = this.props.location.pathname
      // send token to api and retrieve the user that this token belongs to 
      // when we receive user, save their info into state and redirect them to some page
      fetch('http://localhost:3000/api/v1/get_user', {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          //set state with the user's information
          //push that user back to whichever page they were on before this point
          this.setState({ user: data.user }, () => {
            console.log("target path: ", targetPath)
              ; this.props.history.push(targetPath)
          }
          )
        })
    }
  }

  fetchUser = (userObj) => {
    console.log("fetching", userObj)
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        user: userObj
      })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.token);
        this.setState({ user: data.user })
      })
  }
  loginUser = (userObj) => {
    console.log("logging in", userObj)
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        user: userObj
      })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.token);
        this.setState({ user: data.user })
        this.props.history.push("/spies")

      })
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
    console.log("App state user:", this.state.user)
    return (
      <div >
        <Switch>
          <Route path="/signup" render={() => <Signup fetchUser={this.fetchUser} />} />
          <Route path="/login" render={() => <Login loginUser={this.loginUser} />} />
          <Route path="/spies" render={(routerProps) => {
            console.log("Router Props in Render:", routerProps)
            return <SpyContainer user={this.state.user} clickHandler={this.clickHandler} />
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

