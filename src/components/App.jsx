import { Component } from 'react';
import { Global } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, lime } from '@mui/material/colors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyles } from 'css/GlobalStyles';
import { Container, Title, ContactsTitle } from './Container.styled';

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: lime,
  },
});

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFromSubmit = currentContact => {
    this.setState(prevState => ({
      contacts: [currentContact, ...prevState.contacts],
    }));
  };

  handleFilterInputChange = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  updateFilteredList = () => {
    const { contacts, filter } = this.state;
    const validFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(validFilter)
    );
  };

  render() {
    return (
      <>
        <Global styles={GlobalStyles} />
        <Container>
          <ThemeProvider theme={theme}>
            <div>
              <Title>Phonebook</Title>
              <ContactForm onSubmit={this.handleFromSubmit} />
            </div>
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <Filter
                value={this.state.filter}
                onChange={this.handleFilterInputChange}
              />
              <ContactList contacts={this.updateFilteredList()} />
            </div>
          </ThemeProvider>
        </Container>
      </>
    );
  }
}
