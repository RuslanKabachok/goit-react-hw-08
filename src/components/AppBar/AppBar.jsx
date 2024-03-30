import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import css from '../AppBar/AppBar.module.css';

function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
}

export default AppBar;
