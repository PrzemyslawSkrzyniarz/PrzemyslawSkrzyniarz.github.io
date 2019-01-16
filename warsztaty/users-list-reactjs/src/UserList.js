import React, { Component } from 'react';

class UserList extends Component {
    render() {

        // https://reactjs.org/docs/lists-and-keys.html
        // Let’s assign a key to our list items inside numbers.map() and fix the missing key issue.
        let users = this.props.usersArray.map((elem, index)=>{
            return <li key={index} onClick={() => this.props.deleteUser(index)}>{elem}</li>;
        });

        return (
            <ul className="userList">
                {users}
            </ul>
        );
    }
}

export default UserList;
