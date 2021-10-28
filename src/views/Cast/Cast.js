import { useState, useEffect } from "react";
import { fetchActors } from "../../services/movies-api";
import styles from "./Cast.module.css";
import PropTypes from "prop-types";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchActors(movieId).then((response) => setCast(response.cast));
  }, [movieId]);
  return (
    <>
      <ul className={styles.list}>
        {cast.map((item) => (
          <li key={item.id} className={styles.item}>
            <img
              src={`${BASE_URL}${item.profile_path}`}
              alt={item.name}
              width="150"
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>{" "}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default Cast;
