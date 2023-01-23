import { Link, useLocation } from 'react-router-dom';
import { BiStar } from 'react-icons/bi';
import style from './ListItem.module.css';
import PropTypes from 'prop-types';

const ListItem = ({ name, id }) => {
  const location = useLocation();

  return (
    <li className={style.item}>
      <BiStar className={style.icon} />
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={style.link}
      >
        {name}
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ListItem;
