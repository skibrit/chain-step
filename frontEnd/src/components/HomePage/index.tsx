import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import ArtistList from "./ArtistList";
import Footer from "./Footer";

const Home = () => {
  return (
    <Container>
      <SearchBar />
      <ArtistList />
      <Footer />
    </Container>
  );
};

export default Home;
