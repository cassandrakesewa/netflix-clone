import React from "react";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NavBar */}
      {/* Barnner */}
      <Banner />
      <Row
        title="Netflix Origionals"
        fetchUrl={requests.fetchNetflixOrigionals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
