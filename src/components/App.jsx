import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, this.state.name] };
    });
  };

  onChangeHandler = e => this.setState({ name: e.target.value });

  render() {
    return (
      <Phonebook
        handleSubmit={this.onSubmit}
        name={this.state.name}
        handleChange={this.onChangeHandler}
        contacts={this.state.contacts}
      />
    );
  }
}
