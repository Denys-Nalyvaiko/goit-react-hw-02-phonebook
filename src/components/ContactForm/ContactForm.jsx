import { Component } from 'react';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import { FormBox, TextInput } from './ContactForm.styled';

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
      <FormBox
        component="form"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '32ch',
            input: { color: '#f6d9b1' },
          },
        }}
        action="submit"
        onSubmit={this.handleFormSubmit}
      >
        <TextInput
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          id={nameInputId}
          value={this.state.name}
          required
          onChange={this.handleInputChange}
        />
        <TextInput
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          id={numberInputId}
          value={this.state.number}
          required
          onChange={this.handleInputChange}
        />
        <Button variant="outlined" type="submit">
          Add contact
        </Button>
      </FormBox>
    );
  }
}
