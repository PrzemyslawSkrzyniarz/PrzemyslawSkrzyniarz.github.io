import React, { Component } from 'react';

class AddUsersForm extends Component {
    
    addNewUser = (event) => {
        event.preventDefault();
        if (this.userInput.value === '') return; //by niedodać pustego użytkownika
        this.props.addUser(this.userInput.value);
        this.userInput.value = ''; //by pole formularza po dodaniu użytkownika robiło się puste

    }

    render() {
        return (
            <form onSubmit={(event) => this.addNewUser(event)}>
                <input type="text" ref={(input)=>this.userInput = input} placeholder="Nazwa użytkownika" />
                <input type="submit" value="Dodaj użytkownika" />
            </form>
        );
    }
}

export default AddUsersForm;
