import { useState, useEffect } from "react";
import getTrandingMovies from "../../services/movies-api";
import MoviesList from "../../components/MoviesList/MoviesList";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //запрос на сервер
    getTrandingMovies().then((films) =>
      // console.log(films.results)
      setMovies(films.results)
    );
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <MoviesList movies={movies} />
    </div>
  );
}

export default HomePage;
