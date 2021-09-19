import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageLoader from "./components/Layouts/Loader/PageLoader";
import "./App.scss";

const HomePage = React.lazy(() => import("./components/HomePage"));
const AlbumPage = React.lazy(() => import("./components/AlbumPage"));

function App() {
  return (
    <React.Suspense fallback={<PageLoader />}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/album/:id" component={AlbumPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </React.Suspense>
  );
}

export default App;
