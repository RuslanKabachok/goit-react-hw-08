import { useDispatch, useSelector } from 'react-redux';
import css from '../UserMenu/UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

function UserMenu() {
  const nickName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {nickName.name}!</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
