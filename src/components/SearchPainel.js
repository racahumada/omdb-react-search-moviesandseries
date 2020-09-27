import React, { Fragment } from 'react';
import {
  FormControl,
  Row,
  Col,
  ButtonGroup,
  Button,
  ToggleButton,
} from 'react-bootstrap';

function SearchPainel(props) {
  const { submitSearch, radioType, inputSearch, radioGet, inputGet } = props;

  const arrBtnRadio = [
    { name: 'Filme', value: 'movie' },
    { name: 'Série', value: 'series' },
  ];

  const handleCheck = (e) => {
    const { value } = e.target;
    radioGet(value);
  };

  const handleText = (e) => {
    const { value } = e.target;
    inputGet(value);
  };

  const clickSubmit = () => {
    submitSearch();
  };
  return (
    <Fragment>
      <Row>
        <Col>
          <h6 className="mt-3">PESQUISAR FILME OU SÉRIE:</h6>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column">
          <label>Filme ou Série?</label>
          <ButtonGroup toggle>
            {arrBtnRadio.map((btnRadio, id) => {
              const { name, value } = btnRadio;
              return (
                <ToggleButton
                  key={id}
                  type="radio"
                  variant="outline-primary"
                  name="type"
                  value={value}
                  checked={radioType === value}
                  onChange={handleCheck}
                  className="mb-3"
                >
                  {name}
                </ToggleButton>
              );
            })}
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            variant="outline-primary"
            placeholder="Digite aqui..."
            onChange={handleText}
            className="mb-3 border-primary"
          ></FormControl>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={clickSubmit}
            disabled={!inputSearch || !radioType ? true : false}
            block
          >
            Pesquisar
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
}

export default SearchPainel;
