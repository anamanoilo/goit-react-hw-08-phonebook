import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from 'components/Container/Container';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <Container>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default Contacts;
