import React from 'react';

export default function HeaderResults(props) {
  const { totalResults } = props;

  if (!totalResults) {
    return <h5 className="mt-3">Nenhum filme ou série encontrado</h5>;
  }

  return <h5 className="mt-3">Foram encontrados {totalResults} registros</h5>;
}
