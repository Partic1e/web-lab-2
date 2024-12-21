import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SortButton = ({ onSort }) => {
  return (
    <Button onClick={onSort}>
      Сортировать
    </Button>
  );
};
