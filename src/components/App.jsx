import { Component } from 'react';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = value => {
    if (this.state.contacts.find(({ name }) => name === value.name)) {
      alert(`${value.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, value],
      };
    });
    console.log(this.state.contacts);
  };

  deleteContact = contactId =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));

  showContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={value => this.addContact(value)} />
        <h2>Contacts</h2>
        <Filter handleChange={this.onChangeHandler} />
        <ContactList
          contacts={this.showContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
