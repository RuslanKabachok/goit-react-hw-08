import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ContactList from '../ContactList/ContactList';
import HomePage from '../HomePage/HomePage';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { RestrictedRoute } from '../../pages/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from '../../pages/PrivateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <b>Refreshing user, please wait...</b>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/register"
              element={<RestrictedRoute component={<Registration />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<Login />} />}
            />

            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactList />} />}
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}

export default App;
