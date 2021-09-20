import React from "react";
import "../style.scss";

const Error404 = () => {
  return (
    <div id="error-page">
      <div className="error-page-body">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <div className="redirect-homepage-link-wrapper">
          <span className="link-icon">
            <i className="fa fa-home" aria-hidden="true" />
          </span>
          <div>
            <a href="/" className="redirect-homepage-link">
              Redirect to homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
