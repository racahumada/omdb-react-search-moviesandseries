import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SearchPainel from './components/SearchPainel';
import { useState } from 'react';

function App() {
  const [dataSearch, setDataSearch] = useState([]);
  const searchAndApi = async (textSearch, typeSearch) => {
    console.log(textSearch, typeSearch);
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <SearchPainel submitSearch={searchAndApi} />
        </Col>
        <Col xs={12} md={10}>
          teste 2
        </Col>
      </Row>
    </Container>
  );
}

export default App;
