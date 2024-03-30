import { Formik, Form, Field } from 'formik';
import css from './LoginForm.module.css';

function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
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
