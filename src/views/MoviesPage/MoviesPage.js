import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { fetchMovie } from "../../services/movies-api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { AiOutlineSearch } from "react-icons/ai";

//Компонент для поиска фильма
function MoviesPage() {
  const [query, setQuery] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  // console.log("history", history); // search: "?query=cat"
  // console.log("location", location); // search: "?query=cat"

  //метод для изменения input
  const handleChange = (e) => {
    // console.log(e.currentTarget);
    setQuery(e.currentTarget.value);
  };

  //метод для submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovie(query).then((resp) => setFoundMovies(resp));
    //при submit фильма в url будет записан параметр query
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  //отображение фильмов по запросу на новой странице
  useEffect(() => {
    console.log();
    if (location.search !== "") {
      fetchMovie(location.search.split("=")[1]).then((resp) =>
        setFoundMovies(resp)
      );
      //отображение query в inpute по запросу на новой странице
      setQuery(location.search.split("=")[1]);
    }
  }, [location]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query" value={query} onChange={handleChange} />
        <button type="submit">
          <span>
            <AiOutlineSearch size={17} />
          </span>
          Search
        </button>
      </form>
      <MoviesList movies={foundMovies} />
    </>
  );
}

export default MoviesPage;
//отправляем submit, получаем данные по query, засетить в стате и кинуть массив этих фильмов в наш movieList
