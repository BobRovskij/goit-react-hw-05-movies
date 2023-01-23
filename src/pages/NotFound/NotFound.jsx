import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <h2 className={style.title}>Oops! Page not found.</h2>
      <p className={style.description}>
        It looks like the page you are trying to access does not exist. <br />
        Please go back to the{' '}
        <Link to="/" className={style.link}>
          Main Page
        </Link>{' '}
        and try again.
      </p>
    </>
  );
};

export default NotFound;
