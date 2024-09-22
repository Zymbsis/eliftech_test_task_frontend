import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/registrationPage'>Registration</NavLink>
          </li>
          <li>
            <NavLink to='/participantsPage/:id'>Participants</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
