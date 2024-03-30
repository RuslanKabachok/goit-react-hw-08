import { Formik, Form, Field } from 'formik';
import css from '../RegistrationForm/RegistrationForm.module.css';

function RegistrationForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Username
          <Field type="text" name="name"></Field>
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email"></Field>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password"></Field>
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
