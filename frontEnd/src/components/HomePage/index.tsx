import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import ArtistList from "./ArtistList";

const Home = () => {
  return (
    <Container>
      <SearchBar />
      <ArtistList />
    </Container>
  );
};

export default Home;
