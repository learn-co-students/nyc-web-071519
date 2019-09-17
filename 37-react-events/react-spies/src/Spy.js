import React from 'react'

class Spy extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.clickHandler = this.clickHandler.bind(this)
    // }

    state = {
        clicked: false,
        hover: false
    }

    hoverHandler = () => {
        this.setState({ hover: !this.state.hover })
    }

    clickHandler = (e) => {
        console.log("event", e.target)
        this.setState({ clicked: !this.state.clicked })
    }

    otherClickHandler = () => {
        this.props.clickHandler(this.props.spy)
    }

    render() {
        console.log("state:", this.state)
        return (
            <div>
                <img alt="" src={this.state.hover ? this.props.spy.image2 : this.props.spy.image1} onMouseEnter={this.hoverHandler}
                    onClick={this.otherClickHandler} />
                <button onClick={this.clickHandler}>Click Me</button>
                {this.state.clicked ? <h3>{this.props.spy.codeName}</h3> : null}
            </div>
        )
    }
}

export default Spy