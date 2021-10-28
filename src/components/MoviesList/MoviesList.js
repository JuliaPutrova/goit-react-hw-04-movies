import { Link } from "react-router-dom";
import styles from "./MoviesList.module.css";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const BASE_URL = "https://image.tmdb.org/t/p/w500";
//для того чтобы загрузились постеры на странице, нужно к BASE_URL добавить адрес постера (адрес постера это свойство poster_path в объекте results)

function MoviesList({ movies }) {
  const location = useLocation();
  // console.log(location);
  return (
    <ul className={styles.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={styles.item}>
            {/* при клике на какой-то фильм мы должны переходить на movieDetails
            (с помощью Link), и также реализуем переход назад по кнопке (с помощью state: { from: "/" }) */}
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from:
                    location.pathname !== "/"
                      ? location.pathname + location.search
                      : location.pathname,
                },
              }}
            >
              <img
                src={`${BASE_URL}${movie.poster_path}`}
                alt={`${movie.title}`}
                width="200"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default MoviesList;
