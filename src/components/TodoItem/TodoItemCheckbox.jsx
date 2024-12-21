import styled, {css} from "styled-components";

const disabledCss = css`
  background-color: #E2E2E2;
  border-width: 0px;
`

const checkedCss = css`
  border-color: #B5B5BA;
  background-color: #B5B5BA;
  background-image: url(assets/images/svg/todo-done.svg);
  background-position: center;
  background-repeat: no-repeat;
`

export const CheckboxContainer = styled.span(props => {
  return `
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #C4C4C4;
    border-radius: 6px;
    cursor: pointer;
    flex-shrink: 0;
    ${props.disabled ? disabledCss : ''}
    ${props.checked ? checkedCss : ''}
  `;
});


// обновил чекбокс, чтобы по клику изменялось его состояние
export const TodoItemCheckbox = ({ disabled, checked, onChange }) => {
  return <CheckboxContainer disabled={disabled} checked={checked} onClick={onChange} />;
}