import { useDispatch } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
import HomePage from '../HomePage/HomePage';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import { fetchContacts } from '../../redux/contacts/operations';
// import { selectLoading, selecError } from '../../redux/contacts/selectors';

function App() {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selecError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/tasks" element={<TasksPage />} /> */}
          {/* <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          {loading && <h1>Loading contacts</h1>}
          {error && <h1>Error!</h1>}
          <ContactList /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
