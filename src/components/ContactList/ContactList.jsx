import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} name={name} number={number} />
    ))}
  </ul>
);
