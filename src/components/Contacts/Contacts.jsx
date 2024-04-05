import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './Contacts.module.css';
import Contact from '../Contact/Contact';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import {
  selectFilteredByNameContacts,
  selectFilteredByNumberContacts,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContactsByName = useSelector(selectFilteredByNameContacts);
  const visibleContactsByNumber = useSelector(selectFilteredByNumberContacts);

  const visibleContacts = visibleContactsByName.filter((contact) =>
    visibleContactsByNumber.includes(contact)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox></SearchBox>
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact info={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
