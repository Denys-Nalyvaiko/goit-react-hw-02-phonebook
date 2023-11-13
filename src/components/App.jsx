import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const currentContact = { id: nanoid(), name: name, number: number };

    this.setState(prevState => ({
      contacts: [currentContact, ...prevState.contacts],
    }));

    this.reset();
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();

    return (
      <>
        <h1>Phonebook</h1>
        <form action="submit" onSubmit={this.handleFormSubmit}>
          <label htmlFor={nameInputId} />
          Name
          <input
            type="text"
            name="name"
            id={nameInputId}
            value={this.state.name}
            required
            onChange={this.handleInputChange}
          />
          <label htmlFor={numberInputId} />
          Number
          <input
            type="tel"
            name="number"
            id={nameInputId}
            value={this.state.number}
            required
            onChange={this.handleInputChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
