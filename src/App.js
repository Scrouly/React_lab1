import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: "Jhon",
                    lastname: "Conte",
                    email: "some@mail.com",
                    age: 32,
                },
                {
                    id: 2,
                    firstname: "Nika",
                    lastname: "Zalman",
                    email: "some@mail.com",
                    age: 41,
                },
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.delUser = this.delUser.bind(this)

    }

    render() {
        return (<div>
            <Header title="Список пользователей"></Header>
            <aside><AddUser onAdd={this.addUser}></AddUser></aside>
            <div>
                <Users users={this.state.users} delUser={this.delUser}></Users>

            </div>


        </div>)
    }
    delUser(id) {
        this.setState({ users: this.state.users.filter((el) => el.id != id) })
    }
    addUser(user) {
        if (this.state.users.length === 0) {
            const id = this.state.users.length + 1
            this.setState({ users: [...this.state.users, { id, ...user }] })
        } else {
            const id = this.state.users.slice(-1)[0].id + 1
            this.setState({ users: [...this.state.users, { id, ...user }] })
        }

    }
}

export default App