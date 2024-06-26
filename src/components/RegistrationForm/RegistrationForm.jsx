import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import css from '../RegistrationForm/RegistrationForm.module.css';

function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(
        toast.success('Welcome to Contact App!', {
          duration: 3000,
          position: 'top-center',
          icon: '🤗',
        })
      );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
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
