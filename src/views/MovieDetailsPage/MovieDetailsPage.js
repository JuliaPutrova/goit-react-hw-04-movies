import { useState, useEffect, lazy, Suspense } from "react";
import { Route, useParams } from "react-router";
import { useHistory, useLocation, NavLink, Switch } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { fetchMovieDetails } from "../../services/movies-api";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";
import styles from "../../components/Navigation/Navigation.module.css";
const Cast = lazy(() =>
  import("../Cast/Cast.js" /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews.js" /*webpackChunkName: "reviews" */)
);

const BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  //когда мы кликаем на фильм в параматрах url получаем id фильма, поэтому с помощью id в useEffect мы можем отправлять запросы к конкретным фильмам по id отрисовывать
  const { movieId } = useParams();
  // console.log(params); // {movieId: '438631'}
  const history = useHistory();
  const location = useLocation();

  let locationValue = location.state;
  if (location.state) {
    locationValue = location.state.from;
  }

  useEffect(() => {
    fetchMovieDetails(movieId).then((film) => setMovie(film));
  }, [movieId]);
  if (movie === null) {
    return <h1>Данных по фильму нет</h1>;
  }

  const handleBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  //пример перехода на страницу назад
  // const handleBack = () => {
  //   const valueURL = history.location.pathname;

  //   if (valueURL.includes("cast") || valueURL.includes("reviews")) {
  //     history.go(-1);
  //   }

  //   history.goBack();
  // };

  return (
    <>
      <button type="button" onClick={handleBack}>
        <span>
          <AiOutlineRollback size={20} />
        </span>
        Go back
      </button>
      <h1>{movie.title}</h1>
      <img src={`${BASE_URL}${movie.backdrop_path}`} alt="" />
      <p>{movie.overview}</p>
      <NavLink
        to={{
          pathname: `/movies/${movieId}/cast`,
          state: { from: locationValue },
        }}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: `/movies/${movieId}/reviews`,
          state: { from: locationValue },
        }}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Reviews
      </NavLink>

      <Suspense fallback={<h1>Loading... Please wait</h1>}>
        <Switch>
          <Route path={`/movies/${movieId}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`/movies/${movieId}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default MovieDetailsPage;

// <button type="button" onClick={handleBack}>
//   <span>
//     <AiOutlineRollback size={20} />
//   </span>
//   Go back
// </button>;
