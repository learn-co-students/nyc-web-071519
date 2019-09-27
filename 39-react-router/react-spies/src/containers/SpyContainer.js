import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Spy from '../components/Spy'
import CreateForm from '../components/CreateForm'
import SearchForm from '../components/SearchForm'

class SpyContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { list: [], searchTerm: "" }

    }

    componentDidMount() {
        fetch("http://localhost:4000/spies")
            .then(resp => resp.json())
            .then(data => this.setState({
                list: data
            }))
    }

    addSpy = (spy) => {
        console.log("the spy who shagged me", spy)
        this.setState({
            list: [spy, ...this.state.list]
        })
    }


    searchChangeHandler = (e) => {
        console.log("changing")
        this.setState({
            searchTerm: e.target.value
        })
    }

    filterSpyList = () => {

        return this.state.list.filter(spy => spy.codeName.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
    }


    render() {
        let list = this.filterSpyList().map(spyObj => <Spy key={spyObj.codeName} clickHandler={this.props.clickHandler} spy={spyObj} />)
        return (
            <div className="spyContainer">
                <Switch>

                    <Route path="/spies/new" render={() => <CreateForm submitHandler={this.addSpy} />} />

                    {this.state.list.length === 0 ? (<h1>Loading</h1>) : (


                        <Route path="/spies/:id" render={({ match }) => {
                            console.log("ID:", typeof parseInt(match.params.id))
                            let spyObj = this.state.list.find(spyObj => spyObj.id === parseInt(match.params.id))
                            console.log("SPY:", spyObj)
                            return <Spy clickHandler={this.props.clickHandler} spy={spyObj} />
                        }}
                        />
                    )}

                    <Route path="/spies" render={() => {

                        return (
                            <>
                                {this.state.list.length === 0 ? <h2>Loading</h2> : <div><h2>Spy Life</h2><br />Search: <SearchForm searchTerm={this.state.searchTerm} searchChangeHandler={this.searchChangeHandler} /><br />{list}</div>}
                            </>
                        )
                    }} />

                </Switch>



            </div>
        )
    }

}

export default SpyContainer