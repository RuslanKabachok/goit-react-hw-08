import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field type="email" name="email"></Field>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password"></Field>
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
