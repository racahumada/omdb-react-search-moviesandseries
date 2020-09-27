import React, { useState } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { consumeListMoviesAndSeries } from './consumeApi.js';
import SearchPainel from './components/SearchPainel';
import ListResults from './components/ListResults';

function App() {
  // const { REACT_APP_APIKEY } = process.env;
  const [dataSearch, setDataSearch] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const searchAndApi = async (textSearch, typeSearch) => {
    const results = await consumeListMoviesAndSeries(textSearch, typeSearch);
    console.log(results);
    setDataSearch(results.Search);
    setTotalResults(results.totalResults);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <SearchPainel submitSearch={searchAndApi} />
        </Col>
        <Col xs={12} md={10}>
          {totalResults ? (
            <ListResults results={dataSearch} totalResults={totalResults} />
          ) : (
            <h5 className="mt-3">Nenhum filme ou série encontrado</h5>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
