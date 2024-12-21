import styled from 'styled-components';

const Root = styled.div `
  display: flex;
  gap: 9px;
  align-items: center;
  padding: 5px 0;
  width: 100%;
  flex-wrap: nowrap;
`

export const TodoItemContainer = ({children}) => {
  return <Root>{children}</Root>
}