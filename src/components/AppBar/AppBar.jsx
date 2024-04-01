import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import css from '../AppBar/AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectIsRefreshing } from '../../redux/auth/selectors';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.header}>
      <Navigation />
      {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
    </header>
  );
}

export default AppBar;
