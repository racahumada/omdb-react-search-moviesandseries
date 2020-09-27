import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalItem(props) {
  const { selectId, show, onHide } = props;

  return (
    <Modal show={show} onHide={onHide} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>teste - {selectId}</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
}
