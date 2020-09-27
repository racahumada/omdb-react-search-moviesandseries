import React, { Fragment, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { consumeByIdMovieOrSerie } from '../consumeApi.js';
import css from './listResults.module.css';
import ModalItem from './ModalItem.js';

export default function ListResults(props) {
  const { results, totalResults, pageGet, pageList } = props;
  const [modalShow, setModalShow] = useState(false);
  const [dataItem, setDataItem] = useState({});

  const lastPage = `${Math.ceil(totalResults / 10)}`;

  const handleShow = async (event) => {
    const { id } = event.target;
    const results = await consumeByIdMovieOrSerie(id);
    setDataItem(results);
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handlePagination = (e) => {
    const { id } = e.target;
    let calcPage = 0;
    calcPage = id === '+' ? pageList + 1 : id === '-' ? pageList - 1 : 1;
    pageGet(calcPage);
  };

  const cssCard = `${css.cardSize}  m-1`;
  return (
    <Fragment>
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
      <Row>
        <Col className="d-flex align-items-center justify-content-center ">
          <Button
            id="-"
            disabled={pageList - 1 === 0}
            onClick={handlePagination}
            size="lg"
            className="m-1"
          >
            <svg
              id="-"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              className="bi bi-skip-start"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="-"
                fillRule="evenodd"
                d="M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"
              />
              <path
                id="-"
                fillRule="evenodd"
                d="M5.696 8L11.5 4.633v6.734L5.696 8zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L4.904 7.304z"
              />
            </svg>
          </Button>
          <span>{`${pageList} de ${lastPage}`}</span>
          <Button
            id="+"
            onClick={handlePagination}
            size="lg"
            className="m-1"
            disabled={pageList + 1 > lastPage}
          >
            <svg
              id="+"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              className="bi bi-skip-end"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="+"
                fillRule="evenodd"
                d="M12 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                id="+"
                fillRule="evenodd"
                d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
              />
            </svg>
          </Button>
        </Col>
      </Row>
      <ModalItem show={modalShow} onHide={handleClose} infoFilm={dataItem} />
    </Fragment>
  );
}
