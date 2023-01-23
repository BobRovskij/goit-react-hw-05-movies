import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import movieAPI from 'API/movie';
import ListItem from 'components/ListItem/ListItem';
import style from './Home.module.css';

const Home = () => {
  const [trending, setTrending] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateTrendingList = () => {
    movieAPI
      .fetchTrending()
      .then(movies => setTrending(movies))
      .catch(error => toast.error(`${error.message}`))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    generateTrendingList();
  }, []);

  return (
    <section className={style.trending}>
      <h2 className={style.trending__header}>Trending today</h2>
      <ul className={style.trending__list}>
        {trending &&
          trending.map(movie => {
            return <ListItem key={movie.id} name={movie.title} id={movie.id} />;
          })}
        {loading && <Loader />}
      </ul>
    </section>
  );
};

export default Home;
