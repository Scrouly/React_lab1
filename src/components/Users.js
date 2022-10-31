import React from 'react'
import User from './User'

class Users extends React.Component {
   
    render() {
        if (this.props.users.length > 0) {
            return (
                <div>{this.props.users.map((user) => (<User delUser={this.props.delUser} key={user.id} user = {user}></User>))}</div>
            )
        } else { return <div><h3>Список пользователей пуст</h3></div> }
    }
}


export default Users