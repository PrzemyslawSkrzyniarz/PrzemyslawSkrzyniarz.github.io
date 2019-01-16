import React, { Component } from 'react';

import './App.css';
import Header from "./Header";
import AddUsersForm from './AddUsersForm';
import UserList from './UserList';


class Users extends Component {

    constructor() {
        super();
        this.state = {
            userNames: ['Karol', 'Adam', 'Ola', 'Anna', 'Tomasz']
        }
    }

    deleteUser = (listElementKey) => {

        let updatedUsers = this.state.userNames.filter((user, index) => index !== listElementKey);

        this.setState({
            userNames: updatedUsers
        });
    }

    addUser = (userName) => {

        let updatedUsers = this.state.userNames.concat(userName);

        this.setState({
            userNames: updatedUsers
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <AddUsersForm addUser={this.addUser} />
                {/* deleteUser={this.deleteUser} << deleteUser wpisana jako nie metoda czyli bez () bo to properties */}
                <UserList usersArray={this.state.userNames} deleteUser={this.deleteUser} />
            </div>
        );
    }
}

export default Users;
