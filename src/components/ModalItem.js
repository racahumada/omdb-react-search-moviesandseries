import React from 'react';
import { Modal, Image } from 'react-bootstrap';

export default function ModalItem(props) {
  const { show, onHide } = props;
  const { Genre, Title, Plot, Director, Writer, Year, Poster } = props.infoFilm;

  return (
    <Modal show={show} onHide={onHide} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          {Title} ({Year})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={Poster} className="mx-auto d-block" />
        <p>
          <strong>Gênero:</strong> {Genre}
        </p>
        <p>
          <strong>Diretor:</strong> {Director}
        </p>
        <p>
          <strong>Roteirista(s):</strong> {Writer}
        </p>
        <p>
          <strong>Resumo:</strong> {Plot}
        </p>
      </Modal.Body>
    </Modal>
  );
}
