// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import {
//   getContacts,
//   deleteContact,
//   addContact,
// } from 'redux/phonebook/contacts-operations';
import s from './ContactList.module.css';
import { useFetchContactsQuery } from 'services/phonebookApi';
import selectors from 'redux/phonebook/phonebook-selectors';
import ContactItem from 'components/ContactItem';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();
  // const loading = useSelector(selectors.getLoading);
  // const errorStatus = useSelector(selectors.getErrorStatus);
  const filteredContacts = useSelector(state =>
    selectors.getVisibleContacts(state, contacts)
  );

  if (error) {
    return error.status === 404 ? (
      <p className={s.error}>The contact list is empty.</p>
    ) : (
      toast.error('Something went wrong. Please try again later.')
    );
  }
  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader width="50" height="50" />
      </div>
    );
  }
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem name={name} number={number} id={id} key={id} />
      ))}
    </ul>
  );
};

export default ContactList;
