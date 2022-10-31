import React from 'react'
import {AiOutlineClose,} from "react-icons/ai";


class User extends React.Component {
    user = this.props.user
    render() {
        return (
            <div className='user' >
                <AiOutlineClose onClick={()=> this.props.delUser(this.user.id)} className='delete-icon'></AiOutlineClose>
                <h3>id: {this.user.id}</h3>
                <p>name: {this.user.firstname} {this.user.lastname}</p>
                <p>email: {this.user.email}</p>
                <p>age: {this.user.age}</p>
            </div>
        )
    }
}


export default User