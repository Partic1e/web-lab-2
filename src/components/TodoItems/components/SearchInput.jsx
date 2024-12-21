import React from 'react';
import {styled} from 'styled-components';


const Input = styled.input``;

// Разобраться, почему не срабатывает ввод символов в строку , теперь работает)
export const SearchInput = ({ value, onChange }) => {
  return <Input value={value} onChange={onChange} placeholder="Поиск" />;
}