import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import movieAPI from 'API/movie';
import style from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setLoading(true);
    movieAPI
      .fetchMovieDetails(movieId)
      .then(result => setMovie(result))
      .catch(error => toast.error(`${error.message}`))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={style.movieDetails}>
          <Link
            to={location.state?.from ?? '/movies'}
            className={style.goBackBtn}
          >
            <BsArrowLeftCircleFill className={style.backArrow} />
            Go back
          </Link>
          <div className={style.basicInfo}>
            <img
              src={`${BASE_IMG_URL}${movie.poster_path}`}
              alt={movie.title}
              width="280"
            />
            <div className={style.movieInfo}>
              <h2 className={style.name}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p className={style.description}>User Score:</p>
              <h3 className={style.title}>Overview</h3>
              <p className={style.description}>{movie.overview}</p>
              <h4 className={style.title}>Genres</h4>
              <p className={style.description}>
                {movie.genres.map(genre => {
                  return `${genre.name} `;
                })}
              </p>
            </div>
          </div>
          <div className={style.additionalInfo}>
            <h5 className={style.secondaryTitle}>Additional Information:</h5>
            <Link
              to={`/movies/${movie.id}/cast`}
              className={style.link}
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Cast
            </Link>
            <Link
              to={`/movies/${movie.id}/reviews`}
              className={style.link}
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Reviews
            </Link>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
      {loading && <Loader />}
    </>
  );
};

export default MovieDetails;
