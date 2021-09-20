import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageLoader from "./components/Layouts/Loader/PageLoader";
import "./App.scss";

const HomePage = React.lazy(() => import("./components/HomePage"));
const AlbumPage = React.lazy(() => import("./components/AlbumPage"));
const Error404 = React.lazy(
  () => import("./components/Layouts/ErrorPage/Error404")
);

function App() {
  return (
    <React.Suspense fallback={<PageLoader />}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/album/:id" component={AlbumPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </div>
    </React.Suspense>
  );
}

export default App;
