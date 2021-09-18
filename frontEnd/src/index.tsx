import React from "react";
import ReactDOM from "react-dom";
import configStore from "./store/configureStore";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/react-redux-toastr.min.css";
import "./index.scss";
import App from "./App";
const store = configStore({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ReduxToastr
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates
        position="top-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar={false}
        closeOnToastrClick
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
