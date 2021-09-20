import React, { Component } from "react";
import "../style.scss";

interface ComponentProps {
  hasError?: boolean;
}

class ErrorBoundary extends Component<ComponentProps> {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error: any) {
    console.log(`Component Error`, error);
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div id="error-page">
          <div className="error-page-body">
            <div className="notfound-404">
              <h3>Oops! Something went wrong</h3>
              <h1>
                <span>5</span>
                <span>0</span>
                <span>0</span>
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
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
