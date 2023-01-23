import { NavLink } from 'react-router-dom';
import { MdMovieFilter } from 'react-icons/md';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <NavLink to="/" className={style.header__link}>
          <MdMovieFilter className={style.header__icon} />
          Home
        </NavLink>
        <NavLink to="/movies" className={style.header__link}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
