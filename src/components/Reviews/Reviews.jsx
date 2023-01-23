import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import movieAPI from 'API/movie';
import style from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    movieAPI
      .fetchReviews(movieId)
      .then(result => {
        if (result.results.length > 0) {
          setReviews(result.results);
        } else {
          setEmpty(true);
        }
      })
      .catch(error => toast.error(`${error.message}`))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <ul className={style.reviewsList}>
      {loading && <Loader />}

      {reviews &&
        reviews.map(review => {
          return (
            <li className={style.review} key={review.id}>
              <h3 className={style.author}> Author: {review.author}</h3>
              <p className={style.content}>{review.content}</p>
            </li>
          );
        })}

      {empty && (
        <p className={style.empty}>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
