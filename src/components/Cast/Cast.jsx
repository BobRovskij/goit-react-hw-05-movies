import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import movieAPI from 'API/movie';
import style from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setLoading(true);
    movieAPI
      .fetchCast(movieId)
      .then(result => setCast(result.cast))
      .catch(error => toast.error(`${error.message}`))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <ul className={style.castList}>
      {cast &&
        cast.map(actor => {
          return (
            <li className={style.castMember} key={actor.cast_id}>
              {actor.profile_path ? (
                <img
                  src={`${BASE_IMG_URL}${actor.profile_path}`}
                  alt=""
                  width="180"
                  className={style.photo}
                />
              ) : (
                <img
                  src="https://dummyimage.com/500x750/C4F5C8/083004.jpg&text=No+Photo"
                  alt=""
                  width="180"
                  className={style.photo}
                />
              )}
              <div>
                <p className={style.name}>{actor.name}</p>
                <p className={style.character}>Character:</p>
                {actor.character ? (
                  <p className={style.characterName}>{actor.character}</p>
                ) : (
                  <p className={style.characterName}>cameo</p>
                )}
              </div>
            </li>
          );
        })}
      {loading && <Loader />}
    </ul>
  );
};

export default Cast;
