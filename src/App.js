import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { consumeListMoviesAndSeries } from './consumeApi.js';
import SearchPainel from './components/SearchPainel';
import ListResults from './components/ListResults';
import HeaderResults from './components/HeaderResults.js';

function App() {
  const [dataSearch, setDataSearch] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [radioType, setRadioType] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [pageList, setPageList] = useState(1);
  const [click, setClick] = useState(false); //Esta sendo usado como flag para aparecer o spinner

  useEffect(() => {
    const effectRadio = async () => {
      const results = await consumeListMoviesAndSeries(
        inputSearch,
        radioType,
        pageList
      );
      setDataSearch(results.Search);
      setTotalResults(results.totalResults);
    };
    effectRadio();
    // eslint-disable-next-line
  }, [radioType, pageList]);

  const searchAndApi = () => {
    setClick(true);

    //setTimeOut para teste de Spinner
    setTimeout(async () => {
      setPageList(1);
      const results = await consumeListMoviesAndSeries(
        inputSearch,
        radioType,
        pageList
      );
      setDataSearch(results.Search);
      setTotalResults(results.totalResults);
      setClick(false);
    }, 500);
  };

  const getRadio = (value) => {
    setRadioType(value);
  };

  const getInput = (value) => {
    setInputSearch(value);
  };

  const getPage = (value) => {
    setPageList(value);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <SearchPainel
            submitSearch={searchAndApi}
            radioType={radioType}
            inputSearch={inputSearch}
            radioGet={getRadio}
            inputGet={getInput}
          />
        </Col>
        <Col xs={12} md={10}>
          <HeaderResults totalResults={totalResults} />
          {totalResults && dataSearch ? (
            <ListResults
              results={Object.assign(dataSearch)}
              totalResults={totalResults}
              pageGet={getPage}
              pageList={pageList}
            />
          ) : click && !dataSearch ? (
            <Spinner
              animation="grow"
              className="d-flex justify-content-center"
            />
          ) : (
            <p>
              Use o Painel de pesquisa ao lado, para procurar por seu filme ou
              série
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
