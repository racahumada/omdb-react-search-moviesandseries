import React, { Fragment } from 'react';
import { Card, Row, Button } from 'react-bootstrap';
import css from './listResults.module.css';
import { useState } from 'react';
import ModalItem from './ModalItem.js';

export default function ListResults(props) {
  const { REACT_APP_APIKEY } = process.env;
  const { results, totalResults } = props;
  const [modalShow, setModalShow] = useState(false);
  const [dataItem, setDataItem] = useState({});

  const handleShow = async (event) => {
    const { id } = event.target;
    const data = await fetch(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${REACT_APP_APIKEY}`
    );
    const dataJson = await data.json();
    console.log(dataJson);
    setDataItem(dataJson);
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const cssCard = `${css.cardSize}  m-1`;
  return (
    <Fragment>
      <Row>
        <h5 className="mt-3">Foram encontrados {totalResults}</h5>
      </Row>
      <Row className="d-flex justify-content-center">
        {results.map((item, index) => {
          const cssBodyImg = {
            backgroundImage: `url(${item.Poster})`,
            backgroundSize: '100%',
            height: '200px',
          };
          return (
            <Card key={index} className={cssCard}>
              <Card.Body style={cssBodyImg} />
              <Card.Body>
                <Card.Title>
                  {item.Title} - ({item.Year})
                </Card.Title>
                <Button variant="primary" onClick={handleShow} id={item.imdbID}>
                  Saiba mais
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      <ModalItem show={modalShow} onHide={handleClose} infoFilm={dataItem} />
    </Fragment>
  );
}
