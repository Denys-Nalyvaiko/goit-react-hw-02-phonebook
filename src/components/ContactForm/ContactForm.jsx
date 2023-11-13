import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const currentContact = { id: nanoid(), name: name, number: number };

    this.props.onSubmit(currentContact);
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
    );
  }
}
