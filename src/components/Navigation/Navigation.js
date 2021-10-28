import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
//импорт библиотеки material ui
import Button from "@mui/material/Button";

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Button>HomePage</Button>
      </NavLink>
      <NavLink
        to="/movies"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Button>MoviesPage</Button>
      </NavLink>
    </nav>
  );
}

export default Navigation;

//пример без пожключения библиотеки material ui
// function Navigation() {
//   return (
//     <>
//       <NavLink
//         to="/"
//         exact
//         className={styles.link}
//         activeClassName={styles.activeLink}
//       >
//         HomePage
//       </NavLink>
//       <NavLink
//         to="/movies"
//         exact
//         className={styles.link}
//         activeClassName={styles.activeLink}
//       >
//         MoviesPage
//       </NavLink>
//     </>
//   );
// }

// export default Navigation;
