import React from 'react'
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
                {this.state.list.length === 0 ? <h2>Loading</h2> : <div><h2>Spy Life</h2><CreateForm submitHandler={this.addSpy} /><br />Search: <SearchForm searchTerm={this.state.searchTerm} searchChangeHandler={this.searchChangeHandler} /><br />{list}</div>}
            </div>
        )
    }

}

export default SpyContainer