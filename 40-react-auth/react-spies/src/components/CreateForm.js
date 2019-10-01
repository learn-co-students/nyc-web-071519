import React from 'react'

class CreateForm extends React.Component {
    state = {
        codeName: "",
        city: "",
        image1: "",
        image2: ""
    }
    changeHandler = (e) => {
        console.log("changing", e.target.value)
        // if (key === "city") {
        //     this.setState({
        //         city: e.target.value
        //     })
        // } else {

        //     this.setState({
        //         codeName: e.target.value
        //     })
        // }
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            codeName: "",
            city: "",
            image1: "",
            image2: ""
        })
    }



    render() {
        console.log("state", this.state)
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.submitHandler}>
                    code name: <input type="text" placeholder="enter code name" name="codeName" value={this.state.codeName} onChange={this.changeHandler} />
                    city: <input type="text" placeholder="enter city" value={this.state.city} onChange={this.changeHandler} name="city" />
                    image 1: <input type="text" placeholder="enter image 1" value={this.state.image1} onChange={this.changeHandler} name="image1" />
                    image 2: <input type="text" placeholder="enter image 2" value={this.state.image2} onChange={this.changeHandler} name="image2" />
                    <input type="submit" value="Create Spy" />
                </form>

            </div>
        )
    }
}

export default CreateForm