import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBar />
      </Container>
    </div>
  );
}

export default App;
