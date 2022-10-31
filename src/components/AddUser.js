import React from 'react'


class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "not specified",
            lastname: "not specified",
            email: "not specified",
            age: "not specified"
        }

    }
    render() {
        return (
            <form ref={(el) => this.cleanForm = el}>
                <input placeholder='First Name' onChange={(e) => this.setState({ firstname: e.target.value })}></input>
                <input placeholder='Last Name' onChange={(e) => this.setState({ lastname: e.target.value })}></input>
                <input placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })}></input>
                <input placeholder='Age' onChange={(e) => this.setState({ age: e.target.value })}></input>
                <button type='button' onClick={() => {
                    this.cleanForm.reset()
                    this.props.onAdd({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    age: this.state.age
                })}}>ADD</button>
            </form>)
    }
}


export default AddUser