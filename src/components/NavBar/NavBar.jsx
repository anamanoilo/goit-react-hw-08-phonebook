import s from './NavBar.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import authSelectors from 'redux/phonebook/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const NavBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Container>
        <div className={s.navContainer}>
          <nav>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              to="/"
            >
              Home
            </NavLink>
            {isLoggedIn ? (
              <NavLink
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
                to="/contacts"
              >
                Contacts
              </NavLink>
            ) : null}
          </nav>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div>
              <NavLink
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
                to="/register"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
