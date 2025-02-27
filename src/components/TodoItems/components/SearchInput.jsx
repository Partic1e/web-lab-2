import React from 'react';
import {styled} from 'styled-components';


const Input = styled.input``;

export const SearchInput = ({ value, onChange }) => {
  return <Input value={value} onChange={onChange} placeholder="Поиск" />;
}