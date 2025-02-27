import React from 'react';
import styled, { css } from 'styled-components';


const PriorityButton = styled.button`
  width: 24px;
  height: 24px;
  margin: 0 4px;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 14px;
  background-color: white;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      background-color: #4caf50;
      color: white;
      border-color: #4caf50;
    `}

  &:hover {
    background-color: #f0f0f0;
    color: darkgreen;
  }

  &:focus {
    outline: none;
  }
`;

const PriorityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PrioritySelector = ({ currentPriority, onPriorityChange }) => {
  return (
    <PriorityContainer>
      {[1, 2, 3].map((priority) => (
        <PriorityButton
          key={priority}
          selected={currentPriority === priority}
          onClick={() => onPriorityChange(priority)}>
          {priority}
        </PriorityButton>
      ))}
    </PriorityContainer>
  );
};
