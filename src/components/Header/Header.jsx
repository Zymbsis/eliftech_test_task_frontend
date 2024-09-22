import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ''}`
          }
          to='/'>
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
