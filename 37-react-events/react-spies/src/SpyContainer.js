import React from 'react'
import Spy from './Spy'

class SpyContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { list: [] }
    }

    componentDidMount() {
        fetch("http://localhost:4000/spies")
            .then(resp => resp.json())
            .then(data => this.setState({
                list: data
            }))
    }

    render() {
        let list = this.state.list.map(spyObj => <Spy key={spyObj.codeName} clickHandler={this.props.clickHandler} spy={spyObj} />)
        return (
            <div className="spyContainer">
                {this.state.list.length === 0 ? <h2>Loading</h2> : <div><h2>Spy Life</h2>{list}</div>}
            </div>
        )
    }

}

export default SpyContainer