import React from 'react'
import Spy from './Spy'

class SpyContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { list: [] }
    }

    componentDidMount() {
        fetch("http://localhost:3000/spies")
            .then(resp => resp.json())
            .then(data => this.setState({
                list: data
            }))
    }

    render() {
        let list = this.state.list.map(spyObj => <Spy key={spyObj.codeName} spy={spyObj} />)
        return (
            <div>
                {this.state.list.length === 0 ? <h2>Loading</h2> : list}
            </div>
        )
    }

}

export default SpyContainer