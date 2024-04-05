import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from '../Layout/Layout';
import Contacts from '../Contacts/Contacts';
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
    <>
      {isRefreshing ? (
        <b>Refreshing user, please wait...</b>
      ) : (
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<Registration />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<Login />}
                    redirectTo="/contacts"
                  />
                }
              />

              <Route
                path="/contacts"
                element={<PrivateRoute component={<Contacts />} />}
              />
            </Routes>
          </Suspense>
          <Toaster />
        </Layout>
      )}
    </>
  );
}

export default App;
