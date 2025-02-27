import React, {useState} from 'react';
import styled, { css } from "styled-components"
import {TodoItemContainer} from './TodoItemContainer'
import {TodoItemCheckbox} from './TodoItemCheckbox';
import { PrioritySelector } from './TodoItemPriority';

const checkedCss = css`
  color: #B5B5BA;
  text-decoration: line-through;
`

const Title = styled.span(props => {
  return `
    font-size: 15px;
    ${props.checked ? checkedCss : ''};
    white-space: normal;
    word-wrap: break-word;
    word-break: break-word;
    flex-grow: 1;
  `;
})

const Delete = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url(assets/images/png/delete.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const TodoItem = ({id, title, checked, priority, onDelete, onToggle, onPriorityChange}) => {

  const handlePrioritySelect = (newPriority) => {
    onPriorityChange(id, newPriority);
  };

  return (
    <TodoItemContainer>
      <TodoItemCheckbox checked={checked} onChange={() => onToggle(id, !checked)} />
      <Title checked={checked}>
        {title}
      </Title>
      <PrioritySelector currentPriority={priority} onPriorityChange={handlePrioritySelect} />
      <Delete onClick={() => onDelete(id)} />
    </TodoItemContainer>
  )
}
