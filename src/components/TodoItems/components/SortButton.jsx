import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: solid;
  border-radius: 5px;
  background-color: white;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`;

export const SortButton = ({ onSort }) => {
  return (
    <Button onClick={onSort}>
      Сортировать
    </Button>
  );
};
