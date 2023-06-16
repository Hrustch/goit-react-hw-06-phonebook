import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section';
import { PhonebookForm } from './PhonebookForm';
import { PhonebookContacts } from './PhonebookContacts';
import { PhonebookFilter } from './PhonebookFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setContact, setFilter } from 'redux/contactSlice';


const App = () => {
  /* const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) || [])
  const [filter, setFilter] = useState('');
   */
  const dispatch = useDispatch()
  const {contacts, filter} = useSelector(state =>(state))


/*   useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); */

  const addNewContact = (sentContact) => {
    const isExist = contacts.find(
      (contact) => contact.name === sentContact.name || contact.number === sentContact.number
    );
    if (isExist) {
      alert('Such contact already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: sentContact.name,
      number: sentContact.number,
    };

    /* setContacts((prevContacts) => [...prevContacts, newContact]); */
    dispatch(setContact([...contacts, newContact]))
  };

  const onFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContactById = (id) => {
    /* setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id)); */
    dispatch(setContact(contacts.filter((contact) => contact.id !== id)))
  };

  return (
    <div>
      <Section title="Phonebook">
        <PhonebookForm onSubmit={addNewContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <PhonebookFilter filter={filter} onFilterChange={onFilterChange} />
            <PhonebookContacts contactsArr={getFilteredContacts()} deleteContactById={deleteContactById} />
          </>
        ) : (
          <p>No contacts found yet. Please add a new contact!</p>
        )}
      </Section>
    </div>
  );
};

export default App;
