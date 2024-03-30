import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';

function AuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
}

export default AuthNav;
