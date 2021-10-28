import { Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";

// import HomePage from "./views/HomePage/HomePage";
// import MoviesPage from "./views/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import AppBar from "./components/AppBar/AppBar";
const HomePage = lazy(() =>
  import("./views/HomePage/HomePage.js" /*webpackChunkName: "homepage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage.js" /* webpackChunkName: "moviePage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage.js" /*webpackChunkName: "moviedetails" */
  )
);

function App() {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<h1>Loading... Please wait</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <Redirect from="*" to="/" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
